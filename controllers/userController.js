const User = require('../models/userModel');

// Phương thức lấy tất cả người dùng
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Phương thức tạo một người dùng mới
const createUser = async (req, res) => {
  const user = new User({
    numberPhone: req.body.numberPhone,
    fullName: req.body.fullName,
    password: req.body.password,
    address: req.body.address,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getAllUsers, createUser, getOneUser };
