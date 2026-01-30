import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import { config } from './config/env.js';
import { sessionMiddleware } from './config/session.js';

// Importar rutas
import authSessionRoutes from './routes/authSession.routes.js';
import authJwtRoutes from './routes/authJwt.routes.js';
import privateRoutes from './routes/private.routes.js';
import adminRoutes from './routes/private.routes.js'; // O el nombre de tu archivo de admin

const app = express();

// ========== SEGURIDAD ==========

// Helmet - Headers de seguridad
app.use(helmet());

// CORS
app.use(cors({
  origin: config.cors.origin,
  credentials: true, // Permitir cookies
}));

// Rate limiting general
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // 100 requests por IP
  message: 'Demasiadas peticiones, intenta más tarde',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(generalLimiter);

// Rate limiting específico para login (más estricto)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Solo 5 intentos
  message: 'Demasiados intentos de login, intenta en 15 minutos',
  skipSuccessfulRequests: true, // No contar requests exitosos
});

// ========== MIDDLEWARES ==========

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configurar trust proxy si estás detrás de un proxy (Heroku, Render, Nginx)
app.set('trust proxy', 1);

// Session middleware (para rutas de sesión)
app.use(sessionMiddleware);

// ========== RUTAS ==========

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({
    message: 'API de Autenticación - Hackathon 14',
    endpoints: {
      session: {
        register: 'POST /session/register',
        login: 'POST /session/login',
        logout: 'POST /session/logout',
        me: 'GET /session/me',
      },
      jwt: {
        register: 'POST /jwt/register',
        login: 'POST /jwt/login',
        refresh: 'POST /jwt/refresh',
        logout: 'POST /jwt/logout',
        me: 'GET /jwt/me',
      },
      private: {
        profile: 'GET /private/profile',
        adminStats: 'GET /admin/stats',
        adminUsers: 'GET /admin/users',
        order: 'GET /orders/:id',
      },
    },
  });
});

// Aplicar rate limiter a rutas de login
app.use('/session/login', loginLimiter);
app.use('/jwt/login', loginLimiter);

// Montar rutas
app.use('/session', authSessionRoutes);
app.use('/jwt', authJwtRoutes);
app.use('/private', privateRoutes);
app.use('/admin', privateRoutes);

// ========== MANEJO DE ERRORES ==========

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
  });
});

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  // Error de CSRF
  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json({
      error: 'Token CSRF inválido',
    });
  }
  
  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor',
  });
});

export { app };