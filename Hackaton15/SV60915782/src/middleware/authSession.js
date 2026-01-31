/**
 * Middleware para verificar autenticación por sesión
 */
export const requireAuthSession = (req, res, next) => {
  if (!req.session || !req.session.user) {
    return res.status(401).json({ 
      error: 'No autenticado',
      message: 'Debes iniciar sesión para acceder a este recurso'
    });
  }
  
  // Adjuntar usuario a la request
  req.user = req.session.user;
  next();
};

/**
 * Middleware opcional: verificar si hay sesión (no bloquea)
 */
export const optionalAuthSession = (req, res, next) => {
  if (req.session && req.session.user) {
    req.user = req.session.user;
  }
  next();
};