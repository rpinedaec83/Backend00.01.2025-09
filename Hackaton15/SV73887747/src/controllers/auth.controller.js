import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) return res.status(400).json({ msg: 'Usuario/email ya existe' });

    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPass });
    await user.save();

    res.status(201).json({ msg: 'Usuario creado' });
  } catch (err) {
    res.status(500).json({ msg: 'Error en signup' });
  }
};

export const loginSession = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'Credenciales inválidas' });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).json({ msg: 'Credenciales inválidas' });

    req.session.userId = user._id;
    req.session.role = user.role;
    res.json({ msg: 'Login OK (sesión)' });
  } catch (err) {
    res.status(500).json({ msg: 'Error en login sesión' });
  }
};

export const loginJWT = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({ accessToken });
  } catch (err) {
    res.status(500).json({ msg: 'Error en login JWT' });
  }
};

export const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(401).json({ msg: 'No refresh token' });

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.id);
    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ msg: 'Refresh token inválido' });
    }

    const newAccessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(403).json({ msg: 'Refresh token inválido' });
  }
};

export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ msg: 'Error logout sesión' });
  });

  res.clearCookie('refreshToken');
  res.json({ msg: 'Logout OK' });
};

export const getMe = (req, res) => {
  if (!req.session.userId) return res.status(401).json({ msg: 'No autenticado' });
  res.json({ userId: req.session.userId, role: req.session.role });
};