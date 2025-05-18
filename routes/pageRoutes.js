const express = require('express');
const path = require('path');
const router = express.Router();

// render login.html
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

// render register.html
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

module.exports = router;
