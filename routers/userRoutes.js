const express = require('express');
const { getAllUsers, createUser, getOneUser } = require('../controllers/userController');
const { loginUser, logOut } = require('../controllers/loginController');
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router();

// Định nghĩa các endpoint của API cho người dùng
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', getOneUser);
router.post('/create', createUser);
router.post('/login', loginUser);
router.post('/logout', logOut);
module.exports = router;
