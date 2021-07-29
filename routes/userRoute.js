const express = require('express');
const userAuthController = require('../controllers/userAuthController');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/').get(userController.getAllUsers);

router.post('/signup', userAuthController.userSignup);

router.post('/signin', userAuthController.userSignin);

module.exports = router;
