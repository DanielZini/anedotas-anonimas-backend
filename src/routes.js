const express = require('express');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);

routes.put('/posts/:id/like', LikeController.store);

module.exports = routes;