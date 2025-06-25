const express = require('express');
// const path = require('path');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/',(req, res) => {
  res.render('home',{
    title:'Home',
    currentRoute:'/home',
    scripts:`
    <script src="/socket.io/socket.io.js"></script>
    <script src="/js/chatbot.js"></script>
    `
  });
});

// render login.html

router.get('/login', (req, res) => {
  res.render('login', {     
    title: 'Login', 
    currentRoute: '/login',
    scripts: `
    <script src="/js/auth.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="/js/chatbot.js"></script>
    `
  });
});

// render register.html
router.get('/register', (req, res) => {
  res.render('register', {     
    title: 'Register', 
    currentRoute: '/register',
    scripts: `
    <script src="/js/auth.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="/js/chatbot.js"></script>
    `
  });
});

// router.get('/dashboard', (req, res) => {
//   res.render('dashboard', { 
//       title: 'Dashboard',
//       currentRoute: '/dashboard',
//       scripts: `
//       <script src="/socket.io/socket.io.js"></script>
//       <script src="/js/script.js"></script>
//       <script src="/js/chatbot.js"></script>
//       <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
//       <script src="/js/dashboard.js"></script>
//       `,
//       layout: 'layout'  // Optional if layout is always default
//    });
// });

router.get('/dashboard', async (req, res) => {
  try {
    const stats = await dashboardController.getDashboardStats();

    res.render('dashboard', { 
      title: 'Dashboard',
      currentRoute: '/dashboard',
      layout: 'layout',
      ...stats,
      scripts: `
        <script src="/socket.io/socket.io.js"></script>
        <script src="/js/script.js"></script>
        <script src="/js/chatbot.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="/js/dashboard.js"></script>
      `
    });
  } catch (err) {
    console.error('Dashboard stats error:', err);
    res.status(500).send('Error loading dashboard data');
  }
});

router.get('/to-do', (req, res) => {
  res.render('to-do', { 
    title: 'Task list',
    currentRoute: '/to-do',
    user: req.user, 
    scripts: `
      <script src="/socket.io/socket.io.js"></script>
      <script src="/js/helpers.js"></script>
      <script src="/js/script.js"></script>
      <script src="/js/chatbot.js"></script>
      `
   });
});

router.get('/add-task', (req, res) => {
  res.render('add-to-do', { 
    title: 'Create new task',
    currentRoute: '/add-task',
    scripts: `
      <script src="/js/helpers.js"></script>
      <script src="/js/script.js"></script>
      `
   });
});


router.get('/team-member', (req, res) => {
  res.render('team-member', { 
      title: 'Team Member',
      currentRoute: '/team-member',
      scripts: `
      <script src="/socket.io/socket.io.js"></script>
      <script src="/js/helpers.js"></script>
      <script src="/js/script.js"></script>
      <script src="/js/chatbot.js"></script>
      `
   });
});

router.get('/team-chat', (req, res) => {
  res.render('chat', { 
      title: 'Team Chat',
      currentRoute: '/team-chat',
      scripts: `
      <script src="/socket.io/socket.io.js"></script>
      <script src="/js/helpers.js"></script>
      <script src="/js/script.js"></script>      
      <script src="/js/chatbot.js"></script>
      `
   });
});

router.get('/profile', (req, res) => {
  res.render('profile', { 
      title: 'My Profile',
      currentRoute: '/profile',
      scripts: `
      <script src="/socket.io/socket.io.js"></script>
      <script src="/js/helpers.js"></script>
      <script src="/js/script.js"></script>      
      <script src="/js/chatbot.js"></script>
      `
   });
});

module.exports = router;
