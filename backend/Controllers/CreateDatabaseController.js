const User = require('../Models/User');
const Wallet = require('../Models/Wallet');
const Transaction = require('../Models/Transactions');
const Tags = require('../Models/Tags');

exports.createTables = async function(req, res, next) {
  try {
      await User.sync();
      await Wallet.sync();
      await Transaction.sync();
      await Tags.sync();
      res.send("Tables created");
  } catch (err) {
      next(err);
  }
}