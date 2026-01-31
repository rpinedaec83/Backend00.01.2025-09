import express from 'express';
import { validateCredentials, createUser, findUserById } from '../services/user.service.js';
import { requireAuthSession } from '../middleware/authSession.js';

const router = express.Router();

/**
 * POST /session/register - Registrar nuevo usuario
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
 * POST /session/login - Iniciar sesión con cookie
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
    
    // Regenerar sesión (prevenir session fixation)
    req.session.regenerate((err) => {
      if (err) {
        return res.status(500).json({ 
          error: 'Error al crear sesión' 
        });
      }
      
      // Guardar datos del usuario en sesión
      req.session.user = {
        id: user.id,
        email: user.email,
        role: user.role,
      };
      
      req.session.save((err) => {
        if (err) {
          return res.status(500).json({ 
            error: 'Error al guardar sesión' 
          });
        }
        
        res.json({ 
          message: 'Login exitoso',
          user: {
            id: user.id,
            email: user.email,
            role: user.role,
          }
        });
      });
    });
  } catch (error) {
    res.status(401).json({ 
      error: error.message 
    });
  }
});

/**
 * POST /session/logout - Cerrar sesión
 */
router.post('/logout', requireAuthSession, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ 
        error: 'Error al cerrar sesión' 
      });
    }
    
    res.clearCookie('sid');
    res.json({ 
      message: 'Logout exitoso' 
    });
  });
});

/**
 * GET /session/me - Obtener usuario actual
 */
router.get('/me', requireAuthSession, async (req, res) => {
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