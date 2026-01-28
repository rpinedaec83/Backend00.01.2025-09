const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { Order, Payment, Product } = require("../models");

const router = express.Router();

// Middleware: solo usuarios logueados
function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: "No autenticado" });
}

// Crear pago
router.post("/pay", ensureAuth, async (req, res) => {
  try {
    const { amount } = req.body;

    // 1️⃣ Crear orden
    const order = await Order.create({
      total: amount,
      status: "PAID",
      UserId: req.user.id
    });

    // 2️⃣ Crear pago en Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd"
    });

    // 3️⃣ Guardar pago en DB
    const payment = await Payment.create({
      amount,
      provider: "STRIPE",
      status: "PAID",
      OrderId: order.id
    });

    res.json({
      message: "Pago exitoso",
      paymentIntentId: paymentIntent.id,
      paymentId: payment.id
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Devolver pago
router.post("/refund", ensureAuth, async (req, res) => {
  try {
    const { paymentIntentId, paymentId } = req.body;

    // 1️⃣ Refund en Stripe
    await stripe.refunds.create({
      payment_intent: paymentIntentId
    });

    // 2️⃣ Actualizar DB
    const payment = await Payment.findByPk(paymentId);
    payment.status = "REFUNDED";
    await payment.save();

    res.json({ message: "Pago devuelto" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
