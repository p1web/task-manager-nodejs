const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { Activity } = require('../models');
router.get('/chart-data', async (req, res) => {
  try {
    const monthlyData = await dashboardController.getMonthlyCompletedTasks();
    // console.log(monthlyData)
    res.json({ success: true, data: monthlyData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error fetching chart data' });
  }
});

router.get('/fetch-activities', async (req, res) => {
  try {
    const activityData = await Activity.findAll({
      order: [['id', 'DESC']],
      limit : 10,
    });
    res.json({ success: true, data: activityData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error fetching activity data' });
  }
});

module.exports = router;