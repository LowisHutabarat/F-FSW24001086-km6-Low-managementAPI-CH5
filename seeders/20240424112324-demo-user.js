'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Users', [
      {
        name: 'Vlast',
        age: 30,
        address: '123 Main St',
        role: 'Superadmin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Viper',
        age: 25,
        address: '456 Elm St',
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alucard',
        age: 35,
        address: '789 Oak St',
        role: 'Member',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

      down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
