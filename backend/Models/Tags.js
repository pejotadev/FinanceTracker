const Sequelize = require('sequelize');
const sequelize = require('../Database/database');

const Tag = sequelize.define('tag', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    name: {
      type: Sequelize.STRING,
      allowNull: false
      },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  module.exports = Tag;