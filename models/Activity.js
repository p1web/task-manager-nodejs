// models/Activity.js
const { Model, DataTypes } = require('sequelize');

class Activity extends Model {}

Activity.init({
  userId: { type: DataTypes.INTEGER, allowNull: false },
  action: { type: DataTypes.STRING, allowNull: false },
  impactedData: { type: DataTypes.TEXT },
  ipAddress: { type: DataTypes.STRING },
  userAgent: { type: DataTypes.STRING },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  sequelize: require('../config/db'),
  modelName: 'Activity'
});

module.exports = Activity;
