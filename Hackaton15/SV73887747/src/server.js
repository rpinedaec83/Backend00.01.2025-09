import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import csurf from 'csurf';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado 🔥'))
  .catch(err => console.error('MongoDB error:', err));


app.use(helmet());
app.use(cors({ origin: true, credentials: true })); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000 
  }
}));

const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Demasiadas peticiones, intenta más tarde'
});
app.use('/api/auth/', limiter);

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hackathon 16 - Autenticación lista. Prueba /api/auth/login');
});

app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);
  res.status(403).send('CSRF token inválido');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} 🔥`);
});