const Wallet = require('../Models/Wallet');
const Transactions = require('../Models/Transactions');
const Tags = require('../Models/Tags');

exports.createWallet = async function(req, res, next) {
  try {
    const wallet = await Wallet.create(req.body);
    res.status(201).json(wallet);
  } catch (error) {
    next(error);
  }
};

exports.getWallets = async function(req, res, next) {
  try {
    const wallets = await Wallet.findAll();
    res.status(200).json(wallets);
  } catch (error) {
    next(error);
  }
};

exports.getWallet = async function(req, res, next) {
  try {
    let wallet = await Wallet.findByPk(req.params.id, {
      include: [
        {
          model: Transactions
        }
      ]
    });

    for (let index = 0; index < wallet.transactions.length; index++) {
      wallet.transactions[index].dataValues.tag = await Tags.findByPk(wallet.transactions[index].dataValues.tag_id);  
    }
    
    res.status(200).json(wallet);
  } catch (error) {
    next(error);
  }
};

exports.updateWallet = async function(req, res, next) {
  try {
    const wallet = await Wallet.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(wallet);
  } catch (error) {
    next(error);
  }
};

exports.deleteWallet = async function(req, res, next) {
  try {
    const wallet = await Wallet.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(wallet);
  } catch (error) {
    next(error);
  }
};

exports.createWalletTransaction = async function(req, res, next) {
  try {
    const wallet = await Wallet.findByPk(req.params.id);
    const payload = {...req.body, wallet_id: req.params.id};
    const transaction = await wallet.createTransaction(payload);
    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
}