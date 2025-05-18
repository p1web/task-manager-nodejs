const { DataTypes } =  require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  tableName: 'Users',
  timestamps: true,
});

// Establish the relationship between User and Role
// User.belongsTo(Role, { foreignKey: 'roleId' }); 

module.exports = User;