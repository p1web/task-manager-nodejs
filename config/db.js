// config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.MYSQL_DB,      // database name
  process.env.MYSQL_USER,    // username
  process.env.MYSQL_PASS,    // password
  {
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql',
    timezone: '+05:30',
    logging: false,
  }
);

module.exports = sequelize;
