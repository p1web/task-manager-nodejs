const sequelize = require('../config/db');
const Sequelize = require('sequelize');

const User = require('./User');
const Role = require('./Role');
const Task = require('./Task');
const Activity = require('./Activity');

// Define associations
User.belongsTo(Role, { foreignKey: 'roleId' });
Role.hasMany(User, { foreignKey: 'roleId' });

User.hasMany(Task, { foreignKey: 'user_id' });
Task.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  sequelize,
  Sequelize,
  User,
  Role,
  Task,
  Activity
};
