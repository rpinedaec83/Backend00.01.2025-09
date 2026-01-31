const express = require('express');
const { Course, User, Lesson, Enrollment, sequelize } = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

// =============================================
// GET /api/courses - Listar cursos
// =============================================
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      published,
      ownerId,
      search,
      sortBy = 'createdAt',
      order = 'DESC',
      include
    } = req.query;

    const where = {};

    // Filtros
    if (published !== undefined) {
      where.published = published === 'true';
    }

    if (ownerId) {
      where.ownerId = ownerId;
    }

    if (search) {
      where[Op.or] = [
        { title: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } }
      ];
    }

    // Eager loading
    const includeOptions = [
      {
        model: User,
        as: 'owner',
        attributes: ['id', 'firstName', 'lastName', 'email', 'role']
      }
    ];

    if (include && include.includes('lessons')) {
      includeOptions.push({
        model: Lesson,
        as: 'lessons',
        attributes: ['id', 'title', 'slug', 'order'],
        order: [['order', 'ASC']]
      });
    }

    if (include && include.includes('students')) {
      includeOptions.push({
        model: User,
        as: 'students',
        through: { attributes: ['status', 'score'] },
        attributes: ['id', 'firstName', 'lastName', 'email']
      });
    }

    const offset = (parseInt(page) - 1) * parseInt(limit);

    const { count, rows: courses } = await Course.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset,
      order: [[sortBy, order.toUpperCase()]],
      include: includeOptions,
      distinct: true // Importante para count correcto con includes
    });

    const totalPages = Math.ceil(count / parseInt(limit));

    res.json({
      courses,
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
    console.error('Error al listar cursos:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

// =============================================
// GET /api/courses/:id - Obtener un curso
// =============================================
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findByPk(id, {
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'firstName', 'lastName', 'email']
        },
        {
          model: Lesson,
          as: 'lessons',
          attributes: ['id', 'title', 'slug', 'order', 'createdAt'],
          order: [['order', 'ASC']]
        }
      ]
    });

    if (!course) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Course with id ${id} not found`
      });
    }

    res.json(course);

  } catch (error) {
    console.error('Error al obtener curso:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

// =============================================
// POST /api/courses - Crear curso
// =============================================
router.post('/', async (req, res) => {
  try {
    const { title, slug, description, published, ownerId } = req.body;

    // Validaciones
    if (!title || !ownerId) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'title and ownerId are required'
      });
    }

    // Verificar que el owner existe y es instructor
    const owner = await User.findByPk(ownerId);
    if (!owner) {
      return res.status(404).json({
        error: 'Not Found',
        message: 'Owner user not found'
      });
    }

    if (owner.role !== 'instructor' && owner.role !== 'admin') {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Owner must be an instructor or admin'
      });
    }

    const course = await Course.create({
      title,
      slug,
      description,
      published: published || false,
      ownerId
    });

    // Recargar con relaciones
    const courseWithOwner = await Course.findByPk(course.id, {
      include: [{
        model: User,
        as: 'owner',
        attributes: ['id', 'firstName', 'lastName', 'email']
      }]
    });

    res.status(201).json(courseWithOwner);

  } catch (error) {
    console.error('Error al crear curso:', error);

    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({
        error: 'Conflict',
        message: 'Slug already exists'
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

// =============================================
// PUT /api/courses/:id - Actualizar curso
// =============================================
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, description, published, ownerId } = req.body;

    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Course with id ${id} not found`
      });
    }

    // Si cambia el owner, verificar que existe
    if (ownerId && ownerId !== course.ownerId) {
      const newOwner = await User.findByPk(ownerId);
      if (!newOwner) {
        return res.status(404).json({
          error: 'Not Found',
          message: 'New owner user not found'
        });
      }
      if (newOwner.role !== 'instructor' && newOwner.role !== 'admin') {
        return res.status(400).json({
          error: 'Bad Request',
          message: 'New owner must be an instructor or admin'
        });
      }
    }

    if (title !== undefined) course.title = title;
    if (slug !== undefined) course.slug = slug;
    if (description !== undefined) course.description = description;
    if (published !== undefined) course.published = published;
    if (ownerId !== undefined) course.ownerId = ownerId;

    await course.save();

    // Recargar con relaciones
    const updatedCourse = await Course.findByPk(id, {
      include: [{
        model: User,
        as: 'owner',
        attributes: ['id', 'firstName', 'lastName', 'email']
      }]
    });

    res.json(updatedCourse);

  } catch (error) {
    console.error('Error al actualizar curso:', error);

    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({
        error: 'Conflict',
        message: 'Slug already exists'
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

// =============================================
// DELETE /api/courses/:id - Eliminar curso (soft delete)
// =============================================
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Course with id ${id} not found`
      });
    }

    await course.destroy(); // Soft delete por paranoid: true

    res.json({
      message: 'Course deleted successfully (soft delete)',
      course
    });

  } catch (error) {
    console.error('Error al eliminar curso:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

// =============================================
// GET /api/courses/:id/students - Estudiantes de un curso
// =============================================
router.get('/:id/students', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.query;

    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Course with id ${id} not found`
      });
    }

    const where = { courseId: id };
    if (status) {
      where.status = status;
    }

    const enrollments = await Enrollment.findAll({
      where,
      include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'firstName', 'lastName', 'email']
      }],
      order: [['createdAt', 'DESC']]
    });

    res.json({
      courseId: id,
      courseTitle: course.title,
      studentsCount: enrollments.length,
      students: enrollments
    });

  } catch (error) {
    console.error('Error al obtener estudiantes:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
