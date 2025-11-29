const express = require('express');
const authRouter = require('./auth.routes');
const usersRouter = require('./users.routes');
const coursesRouter = require('./courses.routes');
const lessonsRouter = require('./lessons.routes');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/courses', coursesRouter);
router.use('/courses/:courseId/lessons', lessonsRouter);

module.exports = router;
