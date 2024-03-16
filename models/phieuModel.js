const mongoose = require("mongoose");
const User = require('../models/userModel');

const phieuSchema = new mongoose.Schema({
  idNguoiTao: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  idNguoiXuLy: {
    type: String,
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
  danhGia: {
    type:Number,
    default: 5
  }
});

const phieu = mongoose.model("Phieu", phieuSchema);

module.exports = phieu;
