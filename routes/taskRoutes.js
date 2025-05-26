const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');
const accessControl = require('../middleware/accessControlMiddleware');

// All routes below require authentication
router.use(authenticate);

// GET all tasks
// Admin can see all tasks; regular users see only their tasks
router.get('/', taskController.getTasks);

// Create task — only logged-in users can create their own
router.post('/', taskController.createTask);

// Update task
// Admin can update any task, user can only update their own
router.put('/:id', accessControl, taskController.updateTask);

// Delete task
// Admin can delete any task, user can only update their own
router.delete('/:id', accessControl, taskController.deleteTask);


router.get('/users', userController.getUsers);

module.exports = router;
