const Sequelize = require('sequelize');
const sequelize = require('../Database/database');
const User = require('./User');
const Transactions = require('./Transactions');

const Wallet = sequelize.define('wallet', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
      },
    name: {
      type: Sequelize.STRING,
      allowNull: false
      },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false, 
      defaultValue: Sequelize.NOW
      },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true
      }
  });

  Wallet.belongsTo(User);
  Wallet.hasMany(Transactions);

  module.exports = Wallet;