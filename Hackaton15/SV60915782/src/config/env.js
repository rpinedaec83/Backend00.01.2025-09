import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Session
  session: {
    secret: process.env.SESSION_SECRET || 'fallback-secret-change-this',
    maxAge: 1000 * 60 * 15, // 15 minutos
  },
  
  // JWT
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || 'access-fallback',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'refresh-fallback',
    accessTTL: process.env.ACCESS_TTL || '10m',
    refreshTTL: process.env.REFRESH_TTL || '7d',
  },
  
  // Database
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/hackathon_auth',
  },
  
  // CSRF
  csrf: {
    secret: process.env.CSRF_SECRET || 'csrf-fallback',
  },
  
  // CORS
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
  
  // Helpers
  isProduction: () => process.env.NODE_ENV === 'production',
  isDevelopment: () => process.env.NODE_ENV === 'development',
};