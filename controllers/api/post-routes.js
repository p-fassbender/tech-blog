const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Post, User, Comment } = require('../../models');

// get all posts
// get one post
// create a post
// update post
// delete a post

module.exports = router;
