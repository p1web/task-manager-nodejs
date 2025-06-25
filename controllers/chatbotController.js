const ChatbotResponse = require('../models/ChatbotResponse');
const ChatHistory = require('../models/ChatHistory');
const User = require('../models/User');
const { Op } = require('sequelize');


exports.handleUserMessage = async (socket, msg) => {
  const sessionId = socket.id;
  const user_id = socket.user.id;
  let reply = 'Sorry! I didn’t understand that.';

  try {
    // const user = await User.findOne({ where: { id: 2 } });
    await ChatHistory.create(
        { 
            user_id: user_id, 
            sender_type: 'Team Member', 
            message: msg,
            session_id: sessionId,
        }
    );

    const keyword = msg.toLowerCase().trim();
    const response = await ChatbotResponse.findOne({
      where: { keyword: { [Op.like]: `%${keyword}%` } }
    });

    if (response) {
      reply = response.response;
    }

    await ChatHistory.create({ user_id: user_id,  sender_type: 'Bot', message: reply,  session_id: sessionId });
    socket.emit('bot message', reply);
  } catch (err) {
    console.error('Socket error:', err);
    socket.emit('bot message', 'Oops! Something went wrong.');
  }
};


exports.fetchUserMessage = async (socket) =>{
    const user_id = socket.user.id;
    try {
        const messages = await ChatHistory.findAll({
          where: { user_id: user_id},
          order: [['timestamp', 'ASC']],
        });

        console.log('chat history loaded from backend');
        socket.emit('chat history', messages);

      } catch (err) {
        console.error('Error loading chat history:', err);
      }

} 
