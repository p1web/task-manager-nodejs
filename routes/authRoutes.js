const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const cookieAuthMiddleware = require('../middleware/cookieAuthMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/check', cookieAuthMiddleware, authController.checkIsLoggedIn);
router.get('/profile', authMiddleware, authController.profile);
router.put('/profile/:id', authMiddleware, upload.single('profile_img'),  authController.update_profile);

module.exports = router;