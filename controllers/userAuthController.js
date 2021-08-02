const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.userSignup = catchAsync(async (req, res, next) => {
  const userExist = await User.findOne({ email: req.body.email });
  if (!userExist) {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };

    const newUser = await User.create(user);

    res.status(200).json({
      status: 'success',
      message: 'Signup successfully',
      user: newUser,
    });
  } else {
    res.status(409).json({
      status: 'fail',
      message: 'Email already exists! Try different.',
    });
  }
});

exports.userSignin = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(403).json({
      status: 'fail',
      message: 'Email or Password is Incorrect!',
    });
  }

  if (user.password === req.body.password) {
    res.status(200).json({
      status: 'success',
      message: 'Signin successfully',
      user: user,
    });
  }
  if (user.password !== req.body.password) {
    res.status(403).json({
      status: 'fail',
      message: 'Email or Password is Incorrect!',
    });
  }
});
