const express = require('express');
const { Enrollment, User, Course, sequelize } = require('../models');

const router = express.Router();

// GET /api/enrollments - Listar inscripciones
router.get('/', async (req, res) => {
  try {
    const { userId, courseId, status } = req.query;

    const where = {};
    if (userId) where.userId = userId;
    if (courseId) where.courseId = courseId;
    if (status) where.status = status;

    const enrollments = await Enrollment.findAll({
      where,
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'firstName', 'lastName', 'email']
        },
        {
          model: Course,
          as: 'course',
          attributes: ['id', 'title', 'slug']
        }
      ]
    });

    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/enrollments/:id - Obtener una inscripción
router.get('/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findByPk(req.params.id, {
      include: [
        { model: User, as: 'user' },
        { model: Course, as: 'course' }
      ]
    });

    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    res.json(enrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/enrollments - Crear inscripción (CON TRANSACCIÓN)
router.post('/', async (req, res) => {
  const transaction = await sequelize.transaction();
  
  try {
    const { userId, courseId, status } = req.body;

    if (!userId || !courseId) {
      await transaction.rollback();
      return res.status(400).json({ error: 'userId and courseId are required' });
    }

    // Verificar que el usuario existe
    const user = await User.findByPk(userId);
    if (!user) {
      await transaction.rollback();
      return res.status(404).json({ error: 'User not found' });
    }

    // Verificar que el curso existe
    const course = await Course.findByPk(courseId);
    if (!course) {
      await transaction.rollback();
      return res.status(404).json({ error: 'Course not found' });
    }

    // Verificar que no esté ya inscrito
    const existing = await Enrollment.findOne({
      where: { userId, courseId }
    });

    if (existing) {
      await transaction.rollback();
      return res.status(409).json({ error: 'User already enrolled in this course' });
    }

    // Crear inscripción
    const enrollment = await Enrollment.create({
      userId,
      courseId,
      status: status || 'pending'
    }, { transaction });

    // Actualizar contador de estudiantes
    await course.increment('studentsCount', { by: 1, transaction });

    await transaction.commit();

    // Recargar con relaciones
    const enrollmentWithData = await Enrollment.findByPk(enrollment.id, {
      include: [
        { model: User, as: 'user', attributes: ['id', 'firstName', 'lastName'] },
        { model: Course, as: 'course', attributes: ['id', 'title'] }
      ]
    });

    res.status(201).json(enrollmentWithData);
  } catch (error) {
    await transaction.rollback();
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/enrollments/:id - Actualizar inscripción
router.put('/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findByPk(req.params.id);

    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    const { status, score } = req.body;

    if (status !== undefined) enrollment.status = status;
    if (score !== undefined) enrollment.score = score;

    await enrollment.save();
    res.json(enrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/enrollments/:id - Eliminar inscripción (CON TRANSACCIÓN)
router.delete('/:id', async (req, res) => {
  const transaction = await sequelize.transaction();
  
  try {
    const enrollment = await Enrollment.findByPk(req.params.id);

    if (!enrollment) {
      await transaction.rollback();
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    // Decrementar contador del curso
    const course = await Course.findByPk(enrollment.courseId);
    if (course && course.studentsCount > 0) {
      await course.decrement('studentsCount', { by: 1, transaction });
    }

    await enrollment.destroy({ transaction });
    await transaction.commit();

    res.json({ message: 'Enrollment deleted successfully' });
  } catch (error) {
    await transaction.rollback();
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;