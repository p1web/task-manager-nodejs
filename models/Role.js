// models/role.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path as needed

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'Roles',
  timestamps: true,
});

module.exports = Role;
