'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();

    await queryInterface.bulkInsert('Roles', [
      {
        name: 'admin',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'team member',
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', {
      name: ['admin', 'team member']
    }, {});
  }
};
