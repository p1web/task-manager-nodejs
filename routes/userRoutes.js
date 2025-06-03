const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

// All routes below require authentication
router.use(authenticate);

// GET all tasks
router.get('/', userController.getUsers);

router.post('/send-test-email', userController.sendTestEmail);

module.exports = router;
