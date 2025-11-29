const express = require('express');
const {createCourse, listCourses, getCourse, updateCourse, deleteCourse} = require('../controllers/courses.controller');
const {asyncHandler} = require('../utils/async-handler');

const router = express.Router();

router.post('/', asyncHandler(createCourse));
router.get('/', asyncHandler(listCourses));
router.get('/:id', asyncHandler(getCourse));
router.put('/:id', asyncHandler(updateCourse));
router.delete('/:id', asyncHandler(deleteCourse));

module.exports = router;
