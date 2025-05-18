const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authenticate = require('../middleware/authMiddleware');

// Basic CRUD routes
router.get('/', authenticate, taskController.getTasks);
router.post('/', authenticate, taskController.createTask);
router.put('/:id', authenticate, taskController.updateTask);
router.delete('/:id',authenticate, taskController.deleteTask);

module.exports = router;