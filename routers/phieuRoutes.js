const express = require('express');
const { getAllPhieu, getOnePhieu, createPhieu, deletePhieu, updatePhieu } = require('../controllers/phieuController');
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router();

// Định nghĩa các endpoint của API cho người dùng
router.get('/', getAllPhieu);
router.get('/:id', getOnePhieu);
router.post('/create',authMiddleware, createPhieu);
router.delete('/:id',authMiddleware, deletePhieu);
router.put('/:id', authMiddleware, updatePhieu);


module.exports = router;