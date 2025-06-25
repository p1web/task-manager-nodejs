const User = require('../models/User');
const Task = require('../models/Task');
const { Op, fn, col, literal } = require('sequelize');
const moment = require('moment');
const { Activity } = require('../models/Activity');

exports.getDashboardStats = async (req, res) => {
  try {
    // Total registered users
    const totalUsers = await User.count();

    // Total tasks
    const totalTasks = await Task.count();

    // Completed tasks
    const completedTasks = await Task.count({ where: { status: 'completed' } });

    // Pending tasks
    const pendingTasks = await Task.count({ where: { status: 'Pending' } });
    
     // In Progress tasks
    const inprogressTasks = await Task.count({ where: { status: 'In-Progress' } });

    return { totalUsers, totalTasks, completedTasks, pendingTasks, inprogressTasks  };

  } catch (err) {
    console.error('Dashboard Error:', err);
    res.status(500).send('Server Error');
  }
};

exports.getMonthlyCompletedTasks = async () => {
  const sixMonthsAgo = moment().subtract(6, 'months').startOf('month').toDate();

  // Get total tasks
  const totalTasks = await Task.findAll({
    attributes: [
      [fn('DATE_FORMAT', col('createdAt'), '%b'), 'month'],
      [fn('COUNT', col('id')), 'total']
    ],
    where: {
      createdAt: { [Op.gte]: sixMonthsAgo }
    },
    group: [literal('MONTH(createdAt)')],
    order: [literal('MONTH(createdAt)')]
  });

  // Get completed tasks
  const completedTasks = await Task.findAll({
    attributes: [
      [fn('DATE_FORMAT', col('updatedAt'), '%b'), 'month'],
      [fn('COUNT', col('id')), 'Completed']
    ],
    where: {
      status: 'Completed',
      createdAt: { [Op.gte]: sixMonthsAgo }
    },
    group: [literal('MONTH(updatedAt)')],
    order: [literal('MONTH(updatedAt)')]
  });

  // Convert to plain JS objects
  const totalMap = {};
  totalTasks.forEach(row => {
    totalMap[row.get('month')] = {
      month: row.get('month'),
      total: parseInt(row.get('total'), 10),
      completed: 0 // default, will fill later
    };
  });

  completedTasks.forEach(row => {
    const month = row.get('month');
    const count = parseInt(row.get('Completed'), 10);
    if (totalMap[month]) {
      totalMap[month].completed = count;
    } else {
      totalMap[month] = { month, total: 0, completed: count };
    }
  });

  // Return as array sorted by month order
  return Object.values(totalMap);

};