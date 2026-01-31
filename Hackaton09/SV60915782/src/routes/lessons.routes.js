const express = require('express');
const { Lesson, Course } = require('../models');

const router = express.Router();

// GET /api/lessons - Listar lecciones
router.get('/', async (req, res) => {
  try {
    const { courseId } = req.query;
    
    const where = {};
    if (courseId) where.courseId = courseId;

    const lessons = await Lesson.findAll({
      where,
      include: [{
        model: Course,
        as: 'course',
        attributes: ['id', 'title']
      }],
      order: [['order', 'ASC']]
    });

    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/lessons/:id - Obtener una lección
router.get('/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id, {
      include: [{
        model: Course,
        as: 'course',
        attributes: ['id', 'title', 'slug']
      }]
    });

    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/lessons - Crear lección
router.post('/', async (req, res) => {
  try {
    const { title, body, order, courseId } = req.body;

    if (!title || !courseId) {
      return res.status(400).json({ error: 'title and courseId are required' });
    }

    // Verificar que el curso existe
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const lesson = await Lesson.create({
      title,
      body,
      order: order || 0,
      courseId
    });

    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/lessons/:id - Actualizar lección
router.put('/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id);

    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    const { title, body, order } = req.body;

    if (title !== undefined) lesson.title = title;
    if (body !== undefined) lesson.body = body;
    if (order !== undefined) lesson.order = order;

    await lesson.save();
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/lessons/:id - Eliminar lección
router.delete('/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id);

    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    await lesson.destroy();
    res.json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;