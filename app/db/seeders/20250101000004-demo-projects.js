'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        id: 'd4e5f6a7-4444-4000-8000-000000000001',
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform built with React and Node.js, supporting product management, cart, checkout, and payment integration.',
        linksourcode: 'https://github.com/demo/ecommerce-platform',
        thumbnail: '/uploads/projects/ecommerce-thumb.jpg',
        introduction: 'Modern e-commerce solution with real-time inventory management.',
        clone: 'git clone https://github.com/demo/ecommerce-platform.git',
        install: 'npm install',
        run: 'npm run dev',
        slug: 'e-commerce-platform-d4e5f6a7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd4e5f6a7-4444-4000-8000-000000000002',
        title: 'Task Management App',
        description: 'Collaborative task management application with real-time updates, drag-and-drop boards, and team workflow automation.',
        linksourcode: 'https://github.com/demo/task-manager',
        thumbnail: '/uploads/projects/task-thumb.jpg',
        introduction: 'Kanban-style task management for agile teams.',
        clone: 'git clone https://github.com/demo/task-manager.git',
        install: 'npm install',
        run: 'npm start',
        slug: 'task-management-app-d4e5f6a7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd4e5f6a7-4444-4000-8000-000000000003',
        title: 'Weather Dashboard',
        description: 'Real-time weather dashboard with interactive maps, forecasts, and historical data visualization using Chart.js.',
        linksourcode: 'https://github.com/demo/weather-dashboard',
        thumbnail: '/uploads/projects/weather-thumb.jpg',
        introduction: 'Beautiful weather visualization with 7-day forecast.',
        clone: 'git clone https://github.com/demo/weather-dashboard.git',
        install: 'npm install',
        run: 'npm run dev',
        slug: 'weather-dashboard-d4e5f6a7',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
