const User = require('../models/userModel');

exports.userSignup = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(503).json({
      status: 'fail',
      message: 'Something went wrong! Please try again later',
    });
  }
};

exports.userSignin = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });

    if (user.password === req.body.password) {
      res.status(200).json({
        status: 'success',
        message: 'Signin successfully',
        user: user,
      });
    } else {
      res.status(403).json({
        status: 'fail',
        message: 'Email or Password is Incorrect!',
        user: user,
      });
    }
  } catch (err) {
    res.status(503).json({
      status: 'fail',
      message: 'Something went wrong! Please try again later',
    });
  }
};
