import express from 'express';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'Backend activo' });
});

export default app;
