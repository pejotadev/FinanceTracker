const Sequelize = require('sequelize');

const sequelize = new Sequelize('financetrackerapp', 'root', 'toor', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;