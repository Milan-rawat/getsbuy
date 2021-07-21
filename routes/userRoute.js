const express = require('express');
const userAuthController = require('../controllers/userAuthController');

const router = express.Router();

router.post('/signup', userAuthController.userSignup);

module.exports = router;
