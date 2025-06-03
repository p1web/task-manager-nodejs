const User = require('../models/User');
const nodemailer = require('nodemailer');
const { sendEmail } = require('../models/emailService');
// Get all tasks
const getUsers = async (req, res) => {
//   const userId = req.user.id;
//   const roleId = req.user.roleId; 

  try {
      const users = await User.findAll({
          attributes: ['firstName', 'lastName', 'email', 'mobile', 'username', 'createdAt', 'updatedAt'],
          order: [['id', 'DESC']]
      });

      res.json(users);

    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Error fetching users' });
    }
};


const sendTestEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  try {
    await sendEmail(
      email,
      'Test Email from Node.js',
      `Hello ${email}! This is a test email sent from the backend.`
    );
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ success: false, message: 'Email sending failed' });
  }
};

module.exports = { getUsers, sendTestEmail };