const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

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


    res.json({
      token,
      username: user.username,
      roleId: user.roleId
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Logout (handled client-side by clearing token)
exports.logout = (req, res) => {
  res.json({ message: 'Logout handled client-side. Just delete the token.' });
};
