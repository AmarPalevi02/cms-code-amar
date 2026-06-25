'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Jobs', [
      {
        id: 'b2c3d4e5-2222-4000-8000-000000000001',
        job: 'Frontend Developer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b2c3d4e5-2222-4000-8000-000000000002',
        job: 'Backend Developer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b2c3d4e5-2222-4000-8000-000000000003',
        job: 'Full Stack Developer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b2c3d4e5-2222-4000-8000-000000000004',
        job: 'UI/UX Designer',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Jobs', null, {});
  }
};
