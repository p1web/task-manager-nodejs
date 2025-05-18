const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const db = {};

// Initialize models
db.User = require('./User')(sequelize, DataTypes);
db.Task = require('./Task')(sequelize, DataTypes);

// Setup associations (after models are defined)
if (db.User.associate) db.User.associate(db);
if (db.Task.associate) db.Task.associate(db);

// Attach sequelize instance and Sequelize class
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
