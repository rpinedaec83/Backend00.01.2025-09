import { RefreshToken } from '../models/RefreshToken.js';
import { 
  generateJTI, 
  signAccessToken, 
  signRefreshToken,
  verifyRefreshToken,
  calculateExpirationDate 
} from '../utils/tokens.js';
import { config } from '../config/env.js';

/**
 * Generar par de tokens (access + refresh)
 */
export const generateTokenPair = async (userId, role) => {
  const jti = generateJTI();
  const payload = { userId, role };
  
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload, jti);
  
  // Guardar refresh token en DB
  await RefreshToken.create({
    jti,
    userId,
    expiresAt: calculateExpirationDate(config.jwt.refreshTTL),
  });
  
  return { accessToken, refreshToken };
};

/**
 * Verificar y rotar refresh token
 */
export const rotateRefreshToken = async (oldRefreshToken) => {
  // Verificar firma del token
  const decoded = verifyRefreshToken(oldRefreshToken);
  
  // Buscar token en DB
  const tokenDoc = await RefreshToken.findOne({ jti: decoded.jti });
  
  if (!tokenDoc) {
    throw new Error('Refresh token no encontrado');
  }
  
  if (tokenDoc.revoked) {
    throw new Error('Refresh token revocado');
  }
  
  if (tokenDoc.expiresAt < new Date()) {
    throw new Error('Refresh token expirado');
  }
  
  // Revocar token anterior
  tokenDoc.revoked = true;
  await tokenDoc.save();
  
  // Generar nuevo par de tokens
  return await generateTokenPair(decoded.userId, decoded.role);
};

/**
 * Revocar refresh token
 */
export const revokeRefreshToken = async (refreshToken) => {
  try {
    const decoded = verifyRefreshToken(refreshToken);
    
    const tokenDoc = await RefreshToken.findOne({ jti: decoded.jti });
    
    if (tokenDoc && !tokenDoc.revoked) {
      tokenDoc.revoked = true;
      await tokenDoc.save();
    }
    
    return true;
  } catch (error) {
    // Si el token ya expiró o es inválido, no importa
    return true;
  }
};

/**
 * Revocar todos los tokens de un usuario
 */
export const revokeAllUserTokens = async (userId) => {
  await RefreshToken.updateMany(
    { userId, revoked: false },
    { revoked: true }
  );
};