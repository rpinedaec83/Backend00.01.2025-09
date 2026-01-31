const express = require('express');
const { Comment, User, Lesson } = require('../models');

const router = express.Router();

// GET /api/comments - Listar comentarios
router.get('/', async (req, res) => {
  try {
    const { lessonId, userId } = req.query;

    const where = {};
    if (lessonId) where.lessonId = lessonId;
    if (userId) where.userId = userId;

    const comments = await Comment.findAll({
      where,
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName']
        },
        {
          model: Lesson,
          as: 'lesson',
          attributes: ['id', 'title']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/comments/:id - Obtener un comentario
router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id, {
      include: [
        { model: User, as: 'author' },
        { model: Lesson, as: 'lesson' }
      ]
    });

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/comments - Crear comentario
router.post('/', async (req, res) => {
  try {
    const { body, userId, lessonId } = req.body;

    if (!body || !userId || !lessonId) {
      return res.status(400).json({ error: 'body, userId and lessonId are required' });
    }

    // Verificar que el usuario existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verificar que la lección existe
    const lesson = await Lesson.findByPk(lessonId);
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    const comment = await Comment.create({
      body,
      userId,
      lessonId
    });

    // Recargar con relaciones
    const commentWithData = await Comment.findByPk(comment.id, {
      include: [
        { model: User, as: 'author', attributes: ['id', 'firstName', 'lastName'] },
        { model: Lesson, as: 'lesson', attributes: ['id', 'title'] }
      ]
    });

    res.status(201).json(commentWithData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/comments/:id - Actualizar comentario
router.put('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    const { body } = req.body;

    if (body !== undefined) comment.body = body;

    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/comments/:id - Eliminar comentario
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    await comment.destroy();
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
