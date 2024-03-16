// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Không có token, xác thực thất bại' });
    }
    const decodedToken = jwt.verify(token, 'Mini1234');
    if (decodedToken.exp <= Date.now() / 10000) {
      return res.status(401).json({ message: 'Token đã hết hạn, xác thực thất bại' });
    };
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Xác thực thất bại', error: error.message });
  }
};

module.exports = authMiddleware;
