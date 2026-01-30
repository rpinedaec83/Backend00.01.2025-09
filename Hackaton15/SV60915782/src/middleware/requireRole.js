/**
 * Middleware para verificar roles (RBAC)
 * @param  {...string} allowedRoles - Roles permitidos
 */
export const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    // Obtener usuario de sesión o JWT
    const user = req.user || req.session?.user;
    
    if (!user) {
      return res.status(401).json({ 
        error: 'No autenticado',
        message: 'Autenticación requerida'
      });
    }
    
    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ 
        error: 'Acceso denegado',
        message: `Requiere rol: ${allowedRoles.join(' o ')}`
      });
    }
    
    next();
  };
};

/**
 * Middleware para verificar si es el dueño del recurso o admin
 */
export const requireOwnerOrAdmin = (resourceUserIdGetter) => {
  return (req, res, next) => {
    const user = req.user || req.session?.user;
    
    if (!user) {
      return res.status(401).json({ 
        error: 'No autenticado'
      });
    }
    
    // Si es admin, permitir
    if (user.role === 'admin') {
      return next();
    }
    
    // Obtener el ID del dueño del recurso
    const resourceUserId = resourceUserIdGetter(req);
    
    // Verificar si es el dueño
    if (user.id.toString() === resourceUserId.toString()) {
      return next();
    }
    
    return res.status(403).json({ 
      error: 'Acceso denegado',
      message: 'Solo el dueño o administrador puede acceder'
    });
  };
};