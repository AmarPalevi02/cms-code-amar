'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Abouts', [
      {
        id: 'c3d4e5f6-3333-4000-8000-000000000001',
        bioId: 'a1b2c3d4-1111-4000-8000-000000000001',
        jobId: 'b2c3d4e5-2222-4000-8000-000000000001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c3d4e5f6-3333-4000-8000-000000000002',
        bioId: 'a1b2c3d4-1111-4000-8000-000000000001',
        jobId: 'b2c3d4e5-2222-4000-8000-000000000002',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c3d4e5f6-3333-4000-8000-000000000003',
        bioId: 'a1b2c3d4-1111-4000-8000-000000000001',
        jobId: 'b2c3d4e5-2222-4000-8000-000000000003',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c3d4e5f6-3333-4000-8000-000000000004',
        bioId: 'a1b2c3d4-1111-4000-8000-000000000002',
        jobId: 'b2c3d4e5-2222-4000-8000-000000000004',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Abouts', null, {});
  }
};
