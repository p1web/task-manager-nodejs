const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

const sequelize = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');

const User = require('./models/User');
const Task = require('./models/Task');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mount Routes
app.use('/api/tasks',taskRoutes);
app.use('/api/users',userRoutes);
app.use('/api/auth', authRoutes);
app.use('/', pageRoutes);

// Sync database
sequelize.sync()
  .then(() => console.log('MySQL Database connected and synced'))
  .catch(err => console.error('DB connection error:', err));


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});