// const express = require('express');
import express from 'express';
import controller from '../controllers/posts';
const Model = require('../models/modelo');


const router = express.Router()



/** source/routes/posts.ts */


router.get('/posts', controller.getPosts);
router.get('/posts/:id', controller.getPost);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);
router.post('/posts', controller.addPost);

module.exports = router;









module.exports = router;