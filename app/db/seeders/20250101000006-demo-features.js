'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Features', [
      {
        id: 'f6a7b8c9-6666-4000-8000-000000000001',
        title: 'Product Search & Filter',
        description: 'Advanced search with category filters, price range, and rating sorting.',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f6a7b8c9-6666-4000-8000-000000000002',
        title: 'Shopping Cart & Checkout',
        description: 'Real-time cart updates with multi-step checkout and payment gateway integration.',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f6a7b8c9-6666-4000-8000-000000000003',
        title: 'Drag & Drop Boards',
        description: 'Intuitive kanban boards with drag-and-drop task management between columns.',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000002',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f6a7b8c9-6666-4000-8000-000000000004',
        title: 'Real-time Collaboration',
        description: 'Live updates with Socket.io for team collaboration and instant notifications.',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000002',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f6a7b8c9-6666-4000-8000-000000000005',
        title: 'Interactive Weather Map',
        description: 'Real-time weather visualization with interactive maps and location-based forecasts.',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000003',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f6a7b8c9-6666-4000-8000-000000000006',
        title: 'Historical Data Charts',
        description: 'Beautiful charts displaying historical weather data with Chart.js customization.',
        projectId: 'd4e5f6a7-4444-4000-8000-000000000003',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Features', null, {});
  }
};
