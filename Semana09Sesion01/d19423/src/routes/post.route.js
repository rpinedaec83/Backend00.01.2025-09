const postController = require('../controllers/post.controller');

const express = require('express');
const postRouter = express.Router();


postRouter.post('/:authorId', postController.addPost)

module.exports = {postRouter};