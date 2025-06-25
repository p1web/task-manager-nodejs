'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('chatbot_responses', [
      {
        keyword: 'hello',
        response: 'Hi! How can I help you today?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        keyword: 'bye',
        response: 'Goodbye! Have a great day!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        keyword: 'help',
        response: 'Sure! What do you need help with?',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chatbot_responses', null, {});
  }
};
