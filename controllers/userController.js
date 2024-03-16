const User = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
// Phương thức lấy tất cả người dùng

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(req.token)
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

const loginUser = async (req, res) => {
  const { numberPhone, password } = req.body;

  try {
    const user = await User.findOne({ numberPhone });

    if (!user) {
      return res.status(400).json({ message: 'Số điện thoại hoặc mật khẩu không đúng' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Số điện thoại hoặc mật khẩu không đúng' });
    }
    const token = jwt.sign({ userId: user._id }, 'Mini1234', { expiresIn: '1h' });

    res.status(200).json({ token, user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logOut = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Đăng xuất thành công!' });
}

module.exports = { getAllUsers, createUser, getOneUser, loginUser, logOut};
