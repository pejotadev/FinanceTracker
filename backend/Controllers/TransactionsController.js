const Transactions = require('../Models/Transactions');

exports.createTransaction = async function(req, res, next) {
  try {
    const transaction = await Transactions.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};

exports.getTransactions = async function(req, res, next) {
  try {
    const transactions = await Transactions.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};

exports.getTransaction = async function(req, res, next) {
  try {
    const transaction = await Transactions.findByPk(req.params.id);
    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
};

exports.updateTransaction = async function(req, res, next) {
  try {
    const transaction = await Transactions.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
}

exports.deleteTransaction = async function(req, res, next) {
  try {
    const transaction = await Transactions.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
}
