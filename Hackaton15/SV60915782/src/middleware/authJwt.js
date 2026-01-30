import { verifyAccessToken } from '../utils/tokens.js';

/**
 * Middleware para verificar autenticación por JWT
 */
export const requireAuthJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ 
      error: 'No autenticado',
      message: 'Token de acceso requerido'
    });
  }
  
  const token = authHeader.substring(7); // Remover "Bearer "
  
  try {
    const decoded = verifyAccessToken(token);
    
    // Adjuntar usuario a la request
    req.user = {
      id: decoded.userId,
      role: decoded.role,
    };
    
    next();
  } catch (error) {
    return res.status(401).json({ 
      error: 'Token inválido',
      message: error.message
    });
  }
};

/**
 * Middleware opcional: verificar JWT si existe (no bloquea)
 */
export const optionalAuthJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    
    try {
      const decoded = verifyAccessToken(token);
      req.user = {
        id: decoded.userId,
        role: decoded.role,
      };
    } catch (error) {
      // No hacer nada, continuar sin usuario
    }
  }
  
  next();
};