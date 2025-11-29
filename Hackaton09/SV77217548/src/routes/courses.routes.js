const express = require('express');
const {createCourse, listCourses, getCourseBySlug, updateCourse, deleteCourse} = require('../controllers/courses.controller');
const {asyncHandler} = require('../utils/async-handler');
const {authenticate, authorizeRoles} = require('../middlewares/auth');

const router = express.Router();

router.post('/', authenticate, authorizeRoles('admin', 'instructor'), asyncHandler(createCourse));
router.get('/', asyncHandler(listCourses));
router.get('/:slug', asyncHandler(getCourseBySlug));
router.put('/:id', authenticate, authorizeRoles('admin', 'instructor'), asyncHandler(updateCourse));
router.delete('/:id', authenticate, authorizeRoles('admin', 'instructor'), asyncHandler(deleteCourse));

module.exports = router;
