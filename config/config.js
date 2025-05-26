// config/config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql',
    timezone: '+05:30',
    logging: false
  }
};
