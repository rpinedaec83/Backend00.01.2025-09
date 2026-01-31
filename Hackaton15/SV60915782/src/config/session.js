import session from 'express-session';
import MongoStore from 'connect-mongo';
import { config } from './env.js';

/**
 * Configuración de express-session con MongoDB store
 */
export const sessionConfig = {
  name: 'sid', // Nombre personalizado (no usar "connect.sid" por defecto)
  secret: config.session.secret,
  resave: false,
  saveUninitialized: false,
  
  store: MongoStore.create({
    mongoUrl: config.database.url,
    touchAfter: 24 * 3600, // Actualizar sesión solo cada 24h si no cambia
    crypto: {
      secret: config.session.secret,
    },
  }),
  
  cookie: {
    httpOnly: true, // No accesible desde JavaScript
    sameSite: config.isProduction() ? 'strict' : 'lax',
    secure: config.isProduction(), // Solo HTTPS en producción
    maxAge: config.session.maxAge, // 15 minutos
  },
};

/**
 * Middleware de sesión configurado
 */
export const sessionMiddleware = session(sessionConfig);