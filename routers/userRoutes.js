const express = require('express');
const { getAllUsers, createUser, getOneUser, loginUser, logOut } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router();

// Định nghĩa các endpoint của API cho người dùng
router.get('/', authMiddleware, getAllUsers);
router.get('/:id',authMiddleware, getOneUser);
router.post('/create', createUser);
router.post('/login', loginUser);
router.post('/logout', logOut);
module.exports = router;
