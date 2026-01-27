import express from 'express';
import pool from './config/db.config.js';
import app from './app.js';
import paymentRoutes from './routes/payment.routes.js';
import refundRoutes from './routes/refund.routes.js';


app.use(express.json());
app.use('/api/payments', paymentRoutes);
app.use('/api/refunds', refundRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Backend activo' });
});

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ dbTime: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al conectar con la base de datos' });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
