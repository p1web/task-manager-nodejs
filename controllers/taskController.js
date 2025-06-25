const { now } = require('sequelize/lib/utils');
const Task = require('../models/Task');
const User = require('../models/User');
const logActivity = require('../helper/activityLogger');
// const { Activity } = require('../models');

// Get all tasks
exports.getTasks = async (req, res) => {
  const userId = req.user.id;
  const roleId = req.user.roleId; 
  
    try {
      const tasks = await Task.findAll({
        where: roleId === 1 ? {} : { user_id: userId }, // Admin gets all
        order: [['createdAt', 'DESC']]
      });

      res.json(tasks);
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Error fetching tasks' });
    }
};


// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;
  // console.log('Decoded user from JWT:', req.user); // Debug
  const userId = req.user.id;  // Comes from the JWT token

  const taskInfo = {
      title,
      description,
      status: status || 'Pending', 
      priority: priority,
      dueDate:dueDate, 
      user_id: userId             
    }

  try {
    
    const task = await Task.create(taskInfo);

    await logActivity({
        userId,
        action: req.user.username + ' created a new task',
        impactedData: JSON.stringify(task.toJSON()), // Pass the full row or selected fields
        ipAddress: req.ip,
        userAgent: req.headers['user-agent']
      });

    res.status(201).json(task);

  } catch (error) {
     console.error(error)
      res.status(500).json({ message: 'Error inserting task' });
  }
 
};

// Update a task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority, dueDate } = req.body;

  const task = await Task.findByPk(id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  task.title = title || task.title;
  task.description = description || task.description;
  task.status = status || task.status;
  task.priority = priority || task.priority;
  task.dueDate = dueDate || task.dueDate;
  task.updatedAt = now()

  await task.save();

  await logActivity({
    userId: req.user.id,
    action: req.user.username + ' updated a task',
    impactedData: JSON.stringify(task.toJSON()),
    ipAddress: req.ip,
    userAgent: req.headers['user-agent']
  });

  res.json(task);
};


// Delete a task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByPk(id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  await task.destroy();

  await logActivity({
    userId: req.user.id,
    action: req.user.username + ' deleted a task',
    impactedData: JSON.stringify(task.toJSON()),
    ipAddress: req.ip,
    userAgent: req.headers['user-agent']
  });
  
  res.json({ message: 'Task deleted' });
}