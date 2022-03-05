const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

// get all session user posts then render dashboard view
// get certain post then render edit-post view

module.exports = router;