const User = require('../models/User');
const nodemailer = require('nodemailer');
const { sendEmail } = require('../models/emailService');
const { generateEmailTemplate } = require('../helper/emailTemplateHelper');
// Get all tasks
const getUsers = async (req, res) => {
//   const userId = req.user.id;
//   const roleId = req.user.roleId; 

  try {
      const users = await User.findAll({
          attributes: ['firstName', 'lastName', 'email', 'mobile', 'username', 'profile_img', 'createdAt', 'updatedAt'],
          order: [['id', 'DESC']]
      });

      res.json(users);

    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Error fetching users' });
    }
};

// sending test email
const sendTestEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  try {

    const subject = 'Test Email from Node.js Backend';
    const message = 'This is a test email sent from the backend using Node.js.';
    const htmlContent = generateEmailTemplate(email, subject, message);

    await sendEmail(
      email,
      subject,
      htmlContent
    );
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ success: false, message: 'Email sending failed' });
  }
};

module.exports = { getUsers, sendTestEmail };