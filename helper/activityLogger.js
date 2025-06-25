// utils/activityLogger.js
// const Activity = require('../models/Activity'); // Adjust path as needed
const { Activity } = require('../models'); // 👈 load initialized model

/**
 * Logs any user activity to the database
 * @param {Object} options
 * @param {number} options.userId - ID of the user
 * @param {string} options.action - Description of action
 * @param {Object} [options.impactedData] - Affected data row or object (e.g. { name: 'John' })
 * @param {string} [options.ipAddress] - IP address of the user
 * @param {string} [options.userAgent] - User's browser agent string
 */
const logActivity = async ({ userId, action, impactedData = null, ipAddress = '', userAgent = '' }) => {
  
    try {
    await Activity.create({
      userId,
      action,
      impactedData,
      ipAddress,
      userAgent,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Failed to log activity:', error.message);
  }
};

module.exports = logActivity;
