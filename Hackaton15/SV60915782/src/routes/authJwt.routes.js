import express from 'express';
import { validateCredentials, createUser, findUserById } from '../services/user.service.js';
import { generateTokenPair, rotateRefreshToken, revokeRefreshToken } from '../services/token.service.js';
import { requireAuthJwt } from '../middleware/authJwt.js';
import { config } from '../config/env.js';

const router = express.Router();

/**
 * POST /jwt/register - Registrar nuevo usuario
 */
router.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email y password son requeridos' 
      });
    }
    
    const user = await createUser(email, password, role);
    
    res.status(201).json({ 
      message: 'Usuario creado exitosamente',
      user 
    });
  } catch (error) {
    res.status(400).json({ 
      error: error.message 
    });
  }
});

/**
 * POST /jwt/login - Iniciar sesión con JWT
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email y password son requeridos' 
      });
    }
    
    const user = await validateCredentials(email, password);
    const { accessToken, refreshToken } = await generateTokenPair(user.id, user.role);
    
    // Guardar refresh token en cookie HttpOnly
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: config.isProduction() ? 'strict' : 'lax',
      secure: config.isProduction(),
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
    });
    
    res.json({ 
      message: 'Login exitoso',
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      }
    });
  } catch (error) {
    res.status(401).json({ 
      error: error.message 
    });
  }
});

/**
 * POST /jwt/refresh - Renovar access token
 */
router.post('/refresh', async (req, res) => {
  try {
    const oldRefreshToken = req.cookies.refreshToken;
    
    if (!oldRefreshToken) {
      return res.status(401).json({ 
        error: 'Refresh token no encontrado' 
      });
    }
    
    const { accessToken, refreshToken } = await rotateRefreshToken(oldRefreshToken);
    
    // Actualizar refresh token en cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: config.isProduction() ? 'strict' : 'lax',
      secure: config.isProduction(),
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    
    res.json({ 
      message: 'Token renovado',
      accessToken 
    });
  } catch (error) {
    res.status(401).json({ 
      error: error.message 
    });
  }
});

/**
 * POST /jwt/logout - Cerrar sesión JWT
 */
router.post('/logout', requireAuthJwt, async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    
    if (refreshToken) {
      await revokeRefreshToken(refreshToken);
    }
    res.clearCookie('accessToken');
    
    res.clearCookie('refreshToken');
    res.json({ 
      message: 'Logout exitoso' 
    });
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

/**
 * GET /jwt/me - Obtener usuario actual
 */
router.get('/me', requireAuthJwt, async (req, res) => {
  try {
    const user = await findUserById(req.user.id);
    
    if (!user) {
      return res.status(404).json({ 
        error: 'Usuario no encontrado' 
      });
    }
    
    res.json({ user });
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

export default router;