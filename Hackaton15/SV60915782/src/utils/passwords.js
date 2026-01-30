import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

/**
 * Hashear una contraseña
 */
export const hashPassword = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Verificar contraseña contra hash
 */
export const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};