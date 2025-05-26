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

router.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

router.get('/add-task', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/add_task.html'));
});

router.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/users.html'));
});

module.exports = router;
