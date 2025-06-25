// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path as needed
const Role = require('./Role'); // Adjust path as needed

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'id',
    },
  },
  profile_img: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'Users',
  timestamps: true,
});

User.belongsTo(Role, { foreignKey: 'roleId' });

module.exports = User;
