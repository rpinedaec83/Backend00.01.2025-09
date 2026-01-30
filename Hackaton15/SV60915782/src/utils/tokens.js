import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';
import { config } from '../config/env.js';

/**
 * Generar un JTI único (JWT ID)
 */
export const generateJTI = () => {
  return crypto.randomUUID();
};

/**
 * Firmar Access Token (corta duración)
 */
export const signAccessToken = (payload) => {
  return jwt.sign(
    payload,
    config.jwt.accessSecret,
    { expiresIn: config.jwt.accessTTL }
  );
};

/**
 * Firmar Refresh Token (larga duración)
 */
export const signRefreshToken = (payload, jti) => {
  return jwt.sign(
    { ...payload, jti },
    config.jwt.refreshSecret,
    { expiresIn: config.jwt.refreshTTL }
  );
};

/**
 * Verificar Access Token
 */
export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, config.jwt.accessSecret);
  } catch (error) {
    throw new Error('Token inválido o expirado');
  }
};

/**
 * Verificar Refresh Token
 */
export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, config.jwt.refreshSecret);
  } catch (error) {
    throw new Error('Refresh token inválido o expirado');
  }
};

/**
 * Calcular fecha de expiración basada en TTL
 */
export const calculateExpirationDate = (ttl) => {
  const multipliers = {
    s: 1000,
    m: 1000 * 60,
    h: 1000 * 60 * 60,
    d: 1000 * 60 * 60 * 24,
  };
  
  const match = ttl.match(/^(\d+)([smhd])$/);
  if (!match) throw new Error('TTL inválido');
  
  const [, value, unit] = match;
  const ms = parseInt(value) * multipliers[unit];
  
  return new Date(Date.now() + ms);
};