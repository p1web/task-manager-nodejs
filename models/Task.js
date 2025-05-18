const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// const User = require('./User'); 

const Task = sequelize.define('Task', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
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
}, {
  tableName: 'tasks' ,
  timestamps: true, 
});

// Optional association if you're using Sequelize models in a central index.js
// Task.associate = function(models) {
//   Task.belongsTo(models.User, { foreignKey: 'user_id' });
// };


// Establish the relationship between Task and User
// Task.belongsTo(User, { foreignKey: 'user_id' }); // Task belongs to User


module.exports = Task;
