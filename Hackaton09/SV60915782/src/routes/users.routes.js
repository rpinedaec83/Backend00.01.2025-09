const express = require('express');
const { User, Course, Enrollment, Comment } = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

// GET /api/users - Listar usuarios
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      role,
      search,
      sortBy = 'createdAt',
      order = 'DESC'
    } = req.query;

    const where = {};

    if (role) {
      where.role = role;
    }

    if (search) {
      where[Op.or] = [
        { firstName: { [Op.iLike]: `%${search}%` } },
        { lastName: { [Op.iLike]: `%${search}%` } },
        { email: { [Op.iLike]: `%${search}%` } }
      ];
    }

    const offset = (parseInt(page) - 1) * parseInt(limit);

    const { count, rows: users } = await User.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset,
      order: [[sortBy, order.toUpperCase()]]
    });

    const totalPages = Math.ceil(count / parseInt(limit));

    res.json({
      users,
      pagination: {
        total: count,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages,
        hasNext: parseInt(page) < totalPages,
        hasPrev: parseInt(page) > 1
      }
    });

  } catch (error) {
    console.error('Error al listar usuarios:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

// GET /api/users/:id - Obtener un usuario
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        error: 'Not Found',
        message: `User with id ${id} not found`
      });
    }

    res.json(user);

  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

// POST /api/users - Crear usuario
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, role } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'firstName, lastName, and email are required'
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      role: role || 'student'
    });

    res.status(201).json(user);

  } catch (error) {
    console.error('Error al crear usuario:', error);

    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({
        error: 'Conflict',
        message: 'Email already exists'
      });
    }

    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Validation Error',
        details: error.errors.map(e => ({
          field: e.path,
          message: e.message
        }))
      });
    }

    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

// PUT /api/users/:id - Actualizar usuario
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, role } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        error: 'Not Found',
        message: `User with id ${id} not found`
      });
    }

    if (firstName !== undefined) user.firstName = firstName;
    if (lastName !== undefined) user.lastName = lastName;
    if (email !== undefined) user.email = email;
    if (role !== undefined) user.role = role;

    await user.save();

    res.json(user);

  } catch (error) {
    console.error('Error al actualizar usuario:', error);

    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({
        error: 'Conflict',
        message: 'Email already exists'
      });
    }

    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Validation Error',
        details: error.errors.map(e => ({
          field: e.path,
          message: e.message
        }))
      });
    }

    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

// DELETE /api/users/:id - Eliminar usuario
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        error: 'Not Found',
        message: `User with id ${id} not found`
      });
    }

    const coursesCount = await Course.count({ where: { ownerId: id } });

    if (coursesCount > 0) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Cannot delete user with associated courses'
      });
    }

    await user.destroy();

    res.json({
      message: 'User deleted successfully',
      user
    });

  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;