// models/index.js
const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const User = require('./User');
const Role = require('./Role');
const Task = require('./Task');

User.belongsTo(Role, { foreignKey: 'roleId' });
Role.hasMany(User, { foreignKey: 'roleId' });
User.hasMany(Task, { foreignKey: 'user_id' });
Task.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { sequelize, User, Role, Task };