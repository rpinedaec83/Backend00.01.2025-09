import express from 'express';
import { requireRole } from '../middleware/requireRole.js';
import { requireAuthSession } from '../middleware/authSession.js';
import { requireAuthJwt } from '../middleware/authJwt.js';

const router = express.Router();

/**
 * GET /private/profile - Perfil del usuario (requiere auth)
 * Soporta tanto sesión como JWT
 */
router.get('/profile', (req, res, next) => {
  // Intentar autenticación por sesión primero
  if (req.session && req.session.user) {
    req.user = req.session.user;
    return next();
  }
  
  // Si no hay sesión, intentar JWT
  return requireAuthJwt(req, res, next);
}, async (req, res) => {
  res.json({
    message: 'Perfil del usuario',
    user: req.user,
  });
});

/**
 * GET /admin/stats - Estadísticas (solo admin)
 * Usa sesión para esta ruta
 */
router.get('/stats', requireAuthSession, requireRole('admin'), (req, res) => {
  res.json({
    message: 'Panel de administrador',
    stats: {
      totalUsers: 150,
      activeUsers: 42,
      revenue: 15000,
    },
  });
});

/**
 * GET /admin/users - Lista de usuarios (solo admin con JWT)
 */
router.get('/users', requireAuthJwt, requireRole('admin'), (req, res) => {
  res.json({
    message: 'Lista de usuarios',
    users: [
      { id: 1, email: 'admin@test.com', role: 'admin' },
      { id: 2, email: 'user@test.com', role: 'user' },
    ],
  });
});

/**
 * GET /orders/:id - Obtener orden (owner o admin)
 */
router.get('/orders/:id', requireAuthJwt, requireRole('user', 'admin'), (req, res) => {
  // Simulación: verificar si el usuario es dueño de la orden
  const orderId = req.params.id;
  const orderOwnerId = '507f1f77bcf86cd799439011'; // Simulado
  
  if (req.user.role !== 'admin' && req.user.id !== orderOwnerId) {
    return res.status(403).json({
      error: 'Solo el dueño o admin puede ver esta orden'
    });
  }
  
  res.json({
    message: 'Detalle de orden',
    order: {
      id: orderId,
      userId: orderOwnerId,
      total: 250.00,
      status: 'completed',
    },
  });
});

export default router;