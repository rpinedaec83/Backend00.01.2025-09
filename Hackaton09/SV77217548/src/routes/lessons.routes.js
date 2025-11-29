const express = require('express');
const {createLesson, listLessons, updateLesson, deleteLesson} = require('../controllers/lessons.controller');
const {asyncHandler} = require('../utils/async-handler');

const router = express.Router({mergeParams: true}); // Para poder acceder a los parametros del router padre con mergeParams

router.post('/', asyncHandler(createLesson));
router.get('/', asyncHandler(listLessons));
router.put('/:id', asyncHandler(updateLesson));
router.delete('/:id', asyncHandler(deleteLesson));

module.exports = router;
