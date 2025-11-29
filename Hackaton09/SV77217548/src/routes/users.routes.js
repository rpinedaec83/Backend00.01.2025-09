const express = require('express');
const {createUser, listUsers}= require('../controllers/users.controller');
const {asyncHandler} = require('../utils/async-handler');

const router = express.Router();

router.post('/', asyncHandler(createUser));
router.get('/', asyncHandler(listUsers));

module.exports = router;
