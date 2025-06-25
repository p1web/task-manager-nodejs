const jwt = require('jsonwebtoken');
const cookie = require('cookie');
require('dotenv').config();

const socketAuth = (socket, next) => {
  try {
    const cookies = socket.handshake.headers.cookie;
    if (!cookies) return next(new Error('No cookies found'));

    const parsed = cookie.parse(cookies);
    const token = parsed.token;
    if (!token) return next(new Error('No token found'));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to the socket
    socket.user = {
      id: decoded.id,
      username: decoded.username,
      roleId: decoded.roleId
    };

    next();
  } catch (err) {
    console.error('Socket JWT auth error:', err.message);
    next(new Error('Authentication failed'));
  }
};

module.exports = socketAuth;
