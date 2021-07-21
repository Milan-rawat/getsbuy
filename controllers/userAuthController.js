const User = require('../models/userModel');

exports.userSignup = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(503).json({
      status: 'fail',
      message: 'Something went wrong! Please try again later',
    });
  }
};
