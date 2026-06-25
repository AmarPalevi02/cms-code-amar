'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Blogs', [
      {
        id: 'a7b8c9d0-7777-4000-8000-000000000001',
        title: 'Getting Started with React Hooks',
        thumbnail: '/uploads/blogs/react-hooks-thumb.jpg',
        introduction: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
        titleconten: 'Understanding useState and useEffect',
        content: 'React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. The most commonly used hooks are useState for managing local state and useEffect for handling side effects like API calls and subscriptions.',
        solution: 'Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.',
        instalation: 'npx create-react-app my-app\ncd my-app\nnpm start',
        code_snippet: "import React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}",
        elucidation: 'The useState hook returns a pair: the current state value and a function that lets you update it. useEffect lets you perform side effects in function components.',
        tags: JSON.stringify(['react', 'hooks', 'javascript', 'frontend']),
        slug: 'getting-started-with-react-hooks-a7b8c9d0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a7b8c9d0-7777-4000-8000-000000000002',
        title: 'Building RESTful APIs with Express.js',
        thumbnail: '/uploads/blogs/express-api-thumb.jpg',
        introduction: 'A comprehensive guide to building scalable RESTful APIs using Express.js and Node.js.',
        titleconten: 'API Design Best Practices',
        content: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building APIs with its middleware architecture.',
        solution: 'Follow REST conventions: use proper HTTP methods (GET, POST, PUT, DELETE), meaningful resource URLs, and appropriate status codes.',
        instalation: 'mkdir my-api\ncd my-api\nnpm init -y\nnpm install express',
        code_snippet: "const express = require('express');\nconst app = express();\n\napp.get('/api/users', (req, res) => {\n  res.json({ users: [] });\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
        elucidation: 'Express middleware functions are functions that have access to the request object, the response object, and the next middleware function in the applications request-response cycle.',
        tags: JSON.stringify(['nodejs', 'express', 'api', 'backend']),
        slug: 'building-restful-apis-with-expressjs-a7b8c9d0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a7b8c9d0-7777-4000-8000-000000000003',
        title: 'Introduction to Database Design with MySQL',
        thumbnail: '/uploads/blogs/mysql-design-thumb.jpg',
        introduction: 'Understanding the fundamentals of relational database design and normalization with MySQL.',
        titleconten: 'Database Normalization Principles',
        content: 'Database design is the process of producing a detailed data model of a database. This data model contains all the needed logical and physical design choices and physical storage parameters needed to generate a design.',
        solution: 'Follow normalization rules: eliminate duplicate data, ensure data dependencies make sense, and structure data to reduce redundancy.',
        instalation: 'CREATE DATABASE my_database;\nUSE my_database;',
        code_snippet: "CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(100) UNIQUE NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
        elucidation: 'Normalization is the process of organizing data in a database. This includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible.',
        tags: JSON.stringify(['mysql', 'database', 'sql', 'backend']),
        slug: 'introduction-to-database-design-with-mysql-a7b8c9d0',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Blogs', null, {});
  }
};
