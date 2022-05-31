"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const posts_1 = __importDefault(require("../controllers/posts"));
const Model = require('../models/modelo');
const router = express_1.default.Router();
/** source/routes/posts.ts */
router.get('/posts', posts_1.default.getPosts);
router.get('/posts/:id', posts_1.default.getPost);
router.put('/posts/:id', posts_1.default.updatePost);
router.delete('/posts/:id', posts_1.default.deletePost);
router.post('/posts', posts_1.default.addPost);
module.exports = router;
module.exports = router;
