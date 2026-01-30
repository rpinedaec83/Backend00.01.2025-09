require("dotenv").config();

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const sequelize = require("./config/database");

// MODELOS
const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const Payment = require("./models/Payment");

// OAUTH
require("./auth/google");

// RUTAS
const authRoutes = require("./routes/auth");
const paymentsRoutes = require("./routes/payments");

const app = express();

// ────────────────────────
// MIDDLEWARES
// ────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "hackathon-secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Archivos públicos
app.use(express.static("public"));

// ────────────────────────
// RELACIONES (SQL REAL)
// ────────────────────────
User.hasMany(Order);
Order.belongsTo(User);

Order.hasOne(Payment);
Payment.belongsTo(Order);

// ────────────────────────
// RUTAS
// ────────────────────────
app.use("/auth", authRoutes);
app.use("/payments", paymentsRoutes);

// Ruta de prueba
app.get("/me", (req, res) => {
  if (!req.user) return res.status(401).json({ error: "No logueado" });
  res.json(req.user);
});

// ────────────────────────
// INICIAR SERVIDOR
// ────────────────────────
sequelize.sync()
  .then(() => {
    console.log("DB sincronizada");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor en http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
