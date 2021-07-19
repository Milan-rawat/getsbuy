const express = require('express');
const User = require('./models/userModel');

// Start express app
const app = express();

// Middlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Routes
app.post('/api/v1/users/signup', async (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  const user = await User.create(newUser);
  res.status(200).json({
    status: 'success',
    message: 'Signup successfully ',
    user: user,
  });
});

module.exports = app;
