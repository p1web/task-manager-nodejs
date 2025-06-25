const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ChatHistory = sequelize.define('chat_history', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sender_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  session_id:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'chat_history',
  timestamps: false
});

module.exports = ChatHistory;