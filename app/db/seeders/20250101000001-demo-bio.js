'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bios', [
      {
        id: 'a1b2c3d4-1111-4000-8000-000000000001',
        about: 'Full-stack developer with 5+ years experience building web applications using JavaScript, Node.js, and React.',
        city: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a1b2c3d4-1111-4000-8000-000000000002',
        about: 'UI/UX designer focused on creating intuitive and accessible user interfaces for digital products.',
        city: 'Bandung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a1b2c3d4-1111-4000-8000-000000000003',
        about: 'Backend engineer specializing in microservices architecture, API design, and cloud infrastructure.',
        city: 'Surabaya',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bios', null, {});
  }
};
