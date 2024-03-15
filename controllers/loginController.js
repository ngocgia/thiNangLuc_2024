const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const express = require('express');
const jwt = require('jsonwebtoken');

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

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { loginUser };
