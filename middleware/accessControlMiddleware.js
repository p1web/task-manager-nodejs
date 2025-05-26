// middleware/accessControlMiddleware.js
const Task = require('../models/Task');

module.exports = async (req, res, next) => {
  const taskId = req.params.id;
  const userId = req.user.id;
  const roleId = req.user.roleId;

  try {
    const task = await Task.findByPk(taskId);
    if (!task) return res.status(404).json({ message: 'Task not found.' });

    // Allow if admin or owner
    if (roleId === 1 || task.user_id === userId) {
      return next();
    }

    return res.status(403).json({ message: 'Forbidden: You do not have access to this task.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error during access check.' });
  }
};
