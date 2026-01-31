const express = require('express');
require('dotenv').config();
const { sequelize, initModels } = require('./models');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ ok: true });
});

app.get('/api/stats', async (req, res) => {
  try {
    const { User, Course, Lesson, Enrollment, Comment } = require('./models');
    
    const stats = {
      users: await User.count(),
      courses: await Course.count(),
      lessons: await Lesson.count(),
      enrollments: await Enrollment.count(),
      comments: await Comment.count()
    };
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Importar rutas
const usersRoutes = require('./routes/users.routes');
const coursesRoutes = require('./routes/courses.routes');
const lessonsRoutes = require('./routes/lessons.routes');
const enrollmentsRoutes = require('./routes/enrollments.routes');
const commentsRoutes = require('./routes/comments.routes');

// Usar rutas
app.use('/api/users', usersRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/lessons', lessonsRoutes);
app.use('/api/enrollments', enrollmentsRoutes);
app.use('/api/comments', commentsRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ DB conectada');

        await initModels();
        console.log('✅ Modelos sincronizados');

        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Error al iniciar:', error);
    }
})();