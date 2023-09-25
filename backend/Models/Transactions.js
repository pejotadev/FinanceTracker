const Sequelize = require('sequelize');
const sequelize = require('../Database/database');
const Tags = require('./Tags');

const Transactions = sequelize.define('transactions', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    wallet_id: {
      type: Sequelize.INTEGER,
      allowNull: false
      },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false
      },
    date: {
      type: Sequelize.DATE,
      allowNull: false
      },
    description: {
      type: Sequelize.STRING,
      allowNull: true
      },
    type: {
      type: Sequelize.ENUM('income', 'expense'),
      allowNull: false
    },
    tag_id: {
      type: Sequelize.INTEGER,
      allowNull: false 
    }
  });

module.exports = Transactions;