const mongoose = require("mongoose");
const User = require('../models/userModel');

const phieuSchema = new mongoose.Schema({
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  trangThai: {
    type: String,
    required: true,
  },
  loaiDV: {
    type: String,
    required: true,
  },
  thoiGianBD: {
    type: Date,
    default: Date.now,
  },
  thoiGianKT: {
    type: Date,
    default: Date.now,
  },
});

const phieu = mongoose.model("Phieu", phieuSchema);

module.exports = phieu;
