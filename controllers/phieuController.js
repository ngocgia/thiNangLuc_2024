const Phieu = require('../models/phieuModel');
const User = require('../models/userModel');


const getAllPhieu = async (req, res) => {
    try {
      const userId = req.userData.userId;
      const phieus = await Phieu.find({ creatorId: userId })
      res.json(phieus);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

const getOnePhieu = async (req, res) => {
    try {
      const userId = req.userData.userId;
      const phieus = await Phieu.findById(req.params.id)
        .then((phieu) => {
          if (phieu.creatorId.equals(userId)) {
            res.status(200).json(phieu);
        } else {
            res.status(403).send('Bạn không có quyền truy cập vào bài viết này');
        }
        });
      res.json(phieus);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

const createPhieu = async (req, res) => {
    const phieus = new Phieu({
        creatorId: req.userData.userId,
        trangThai: req.body.trangThai,
        loaiDV: req.body.loaiDV,
        thoiGianBD: req.body.thoiGianBD,
        thoiGianKT: req.body.thoiGianKT,
    });
  
    try {
      const newPhieu = await phieus.save();
      res.status(201).json(newPhieu);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};
  
const deletePhieu = async (req, res) => {
    try {
        const phieus = await Phieu.deleteOne({
            _id: new Object(req.params.id),
            creatorId: currentUserId
        });
        res.json(phieus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const updatePhieu = async (req, res) => {
    try {
        const phieus = await Phieu.updateOne(
            {_id: new Object(req.params.id)},
            {$set: { trangThai: req.body.trangThai }}
        );
        res.json(phieus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
module.exports = { getAllPhieu, getOnePhieu, createPhieu, deletePhieu, updatePhieu};