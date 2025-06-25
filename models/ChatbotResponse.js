const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ChatbotResponse = sequelize.define('chatbot_responses', {
  keyword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  response: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  tableName: 'chatbot_responses'
});

module.exports = ChatbotResponse;
