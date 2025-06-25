const chatbotController = require('./controllers/chatbotController');
const ChatHistory = require('./models/ChatHistory');
const socketAuth = require('./middleware/socketAuth');


module.exports = (io) => {
  
  io.use(socketAuth); // Use JWT middleware for all socket connections

  io.on('connection', async  (socket) => {
    console.log('User connected:', socket.id);

    await chatbotController.fetchUserMessage(socket);

    socket.on('user message', async (msg) =>
      chatbotController.handleUserMessage(socket, msg)
    );

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};
