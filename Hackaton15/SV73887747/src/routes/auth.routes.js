import express from 'express';
import { signup, loginSession, loginJWT, refreshToken, logout, getMe } from '../controllers/auth.controller.js';
import { verifyToken, isAdmin } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/session/login', loginSession);
router.post('/jwt/login', loginJWT);
router.post('/jwt/refresh', refreshToken);
router.post('/logout', logout);
router.get('/me', verifyToken, getMe);
router.get('/admin/stats', [verifyToken, isAdmin], (req, res) => {
  res.json({ msg: 'Stats admin' });
});

export default router;