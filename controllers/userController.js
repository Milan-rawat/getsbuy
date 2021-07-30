const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(200).json({
      status: 'success',
      users: allUsers,
    });
  } catch (err) {
    res.status(503).json({
      status: 'fail',
      message: 'Something went wrong! Please try again later',
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      user: user,
    });
  } catch (err) {
    res.status(503).json({
      status: 'fail',
      message: 'Something went wrong! Please try again later',
    });
  }
};
