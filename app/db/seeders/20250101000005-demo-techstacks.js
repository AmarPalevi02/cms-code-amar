'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Techstacks', [
      {
        id: 'e5f6a7b8-5555-4000-8000-000000000001',
        techstack: 'React',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e5f6a7b8-5555-4000-8000-000000000002',
        techstack: 'Node.js',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e5f6a7b8-5555-4000-8000-000000000003',
        techstack: 'PostgreSQL',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e5f6a7b8-5555-4000-8000-000000000004',
        techstack: 'Vue.js',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000002',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e5f6a7b8-5555-4000-8000-000000000005',
        techstack: 'Socket.io',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000002',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e5f6a7b8-5555-4000-8000-000000000006',
        techstack: 'MongoDB',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000002',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e5f6a7b8-5555-4000-8000-000000000007',
        techstack: 'React',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000003',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e5f6a7b8-5555-4000-8000-000000000008',
        techstack: 'Chart.js',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000003',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e5f6a7b8-5555-4000-8000-000000000009',
        techstack: 'OpenWeather API',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000003',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Techstacks', null, {});
  }
};
