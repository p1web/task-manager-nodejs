// models/task.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path as needed
const User = require('./User'); // Adjust path as needed

const Task = sequelize.define('Task', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
  priority: {
    type: DataTypes.ENUM('Low', 'Medium', 'High'),
    defaultValue: 'Medium',
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  
}, {
  tableName: 'Tasks',
  timestamps: true,
});

Task.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Task;
