const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const http = require('http');
const socketIo = require('socket.io');

require('dotenv').config();

const sequelize = require('./config/db');
const { Op } = require('sequelize');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');
const dashboardApi = require('./routes/dashboardApi');

const attachUserToViews = require('./middleware/attachUserToViews');
const User = require('./models/User');
const Task = require('./models/Task');
const ChatbotResponse = require('./models/ChatbotResponse');
const ChatHistory = require('./models/ChatHistory');
const Activity = require('./models/Activity');


const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIo(server);

// Socket handler
require('./socket')(io); // <-- This loads and passes `io` to `socket.js`

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use(cookieParser());
app.use(attachUserToViews);

//Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts); // <--- Add this line
app.set('layout', 'layout'); // <--- Default layout (views/layout.ejs)


// Mount Routes
app.use('/api/tasks',taskRoutes);
app.use('/api/users',userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardApi);
app.use('/', pageRoutes);


// Sync database
sequelize.sync()
  .then(() => console.log('MySQL Database connected and synced'))
  .catch(err => console.error('DB connection error:', err));


// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});