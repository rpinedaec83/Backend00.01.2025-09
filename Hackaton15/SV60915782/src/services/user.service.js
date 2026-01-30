import { User } from '../models/User.js';
import { hashPassword, verifyPassword } from '../utils/passwords.js';

/**
 * Crear un nuevo usuario
 */
export const createUser = async (email, password, role = 'user') => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('El usuario ya existe');
  }
  
  const passwordHash = await hashPassword(password);
  const user = await User.create({
    email,
    passwordHash,
    role,
  });
  
  return {
    id: user._id,
    email: user.email,
    role: user.role,
  };
};

/**
 * Buscar usuario por email
 */
export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

/**
 * Buscar usuario por ID
 */
export const findUserById = async (id) => {
  return await User.findById(id).select('-passwordHash');
};

/**
 * Validar credenciales de usuario
 */
export const validateCredentials = async (email, password) => {
  const user = await findUserByEmail(email);
  
  if (!user) {
    throw new Error('Credenciales inválidas');
  }
  
  // Verificar si la cuenta está bloqueada
  if (user.isLocked()) {
    throw new Error('Cuenta temporalmente bloqueada. Intenta más tarde.');
  }
  
  const isValid = await verifyPassword(password, user.passwordHash);
  
  if (!isValid) {
    // Incrementar intentos fallidos
    user.failedLoginAttempts += 1;
    
    // Bloquear cuenta después de 5 intentos
    if (user.failedLoginAttempts >= 5) {
      user.lockUntil = new Date(Date.now() + 15 * 60 * 1000); // 15 minutos
    }
    
    await user.save();
    throw new Error('Credenciales inválidas');
  }
  
  // Resetear intentos fallidos en login exitoso
  if (user.failedLoginAttempts > 0 || user.lockUntil) {
    user.failedLoginAttempts = 0;
    user.lockUntil = undefined;
    await user.save();
  }
  
  return {
    id: user._id,
    email: user.email,
    role: user.role,
  };
};