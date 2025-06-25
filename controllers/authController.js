const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const logActivity = require('../helper/activityLogger');
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Register user
exports.register = async (req, res) => {
  const { firstname, lastname, email, mobile, username, password } = req.body;

  try {
    
        const existingUser = await User.findOne({ where: { username } });

        if (existingUser) 
            return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const insert_info = { 
            firstName:firstname,
            lastName:lastname,
            email:email,
            mobile:mobile,
            username:username, 
            password:hashedPassword,            
            roleId: 2  
        }

        const newUser = await User.create(insert_info);

        res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.log(err);
        res.status(500).json({ message: 'Server error' });
  }
};


// Login user
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    
    const user = await User.findOne({ where: { username } });

    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
        { id: user.id, roleId: user.roleId, username: user.username },
        JWT_SECRET, 
        { expiresIn: '1h' });

        // Set token in a cookie
        res.cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // true in production
          maxAge: 60 * 60 * 1000 // 1 hour
        });

        await logActivity({
          userId: user.id,
          action:  user.username + ' logged in',
          impactedData: JSON.stringify(user.toJSON()),
          ipAddress: req.ip,
          userAgent: req.headers['user-agent']
        });

        res.json({
        message: 'Login successful',
        token,
        username: user.username,
        roleId: user.roleId
      });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.checkIsLoggedIn = (req, res) => {
  res.json({ loggedIn: true });
}

exports.profile = async (req, res) => {
  const user_id = req.user.id;
  try {
    
    const user_info = await User.findOne(
      { where: { id : user_id }, attributes: ['id', 'firstName', 'lastName', 'email', 'mobile', 'profile_img', 'createdAt', 'updatedAt'] }
    );

    if (!user_info) return res.status(400).json({ message: 'No data found' });
    res.send(user_info);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
   
  // console.log(req.user);
  
}

exports.update_profile = async (req, res) => {

  const { id } = req.params;
  const { first_name, last_name, email, mobile } = req.body;

  const user_info = await User.findByPk(id);

  if (!user_info) return res.status(404).json({ message: 'User not found' });

  user_info.firstName = first_name || user_info.firstName;
  user_info.lastName = last_name || user_info.lastName;
  user_info.email = email || user_info.email;
  user_info.mobile = mobile || user_info.mobile;

  if (req.file) {
    // Remove old image if it exists
    if (user_info.profile_img) {
      const oldImagePath = path.join(__dirname, '..', 'public', 'uploads', 'users', user_info.profile_img);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    user_info.profile_img = req.file.filename;
  }

  user_info.updatedAt = new Date();

  await user_info.save();

  await logActivity({
    userId: user_info.id,
    action: req.user.username + 'updated profile',
    impactedData: JSON.stringify(user_info.toJSON()),
    ipAddress: req.ip,
    userAgent: req.headers['user-agent']
  });

  res.status(200).json({ message: 'Profile updated successfully' });
  
}

// Logout (handled client-side by clearing token)
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
  // res.json({ message: 'Logout handled client-side. Just delete the token.' });
};
