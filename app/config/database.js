require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASS || null,
    "database": process.env.DB_NAME || "code_amar",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": process.env.DB_PORT || "8889",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASS || null,
    "database": process.env.DB_NAME || "code_amar",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": process.env.DB_PORT || "8889",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASS || null,
    "database": "database_production",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": process.env.DB_PORT || "8889",
    "dialect": "mysql"
  }
}