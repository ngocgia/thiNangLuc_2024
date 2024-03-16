const mongoose = require('mongoose');


const phieuSchema = new mongoose.Schema({
    trangThai: {
      type: String,
      required: true,
    },
    loaiDV :{
      type: String,
      required: true,
    },
    thoiGianBD: {
      type: Date,
      default: Date.now
    },
    thoiGianKT: {
      type: Date,
    }
  });
  
  
  const phieu = mongoose.model('Phieu', phieuSchema);
  
  module.exports = phieu;