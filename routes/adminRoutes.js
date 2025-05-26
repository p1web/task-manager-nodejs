// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { Task } = require('../models');
const roleMiddleware = require('../middleware/roleMiddleware');

// router.get('/tasks', roleMiddleware(1), async (req, res) => {
//   const tasks = await Task.findAll();
//   res.json(tasks);
// });

module.exports = router;
