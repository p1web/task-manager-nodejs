const User = require('../models/User');

// Get all tasks
exports.getUsers = async (req, res) => {
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
