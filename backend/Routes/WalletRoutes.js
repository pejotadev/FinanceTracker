const express = require('express');
const Router = express.Router();
const WalletController = require('../Controllers/WalletController');

Router.post('/create', WalletController.createWallet);
Router.get('/:id', WalletController.getWallet);
Router.put('/:id', WalletController.updateWallet);
Router.delete('/:id', WalletController.deleteWallet);
Router.post('/:id/transaction', WalletController.createWalletTransaction);


module.exports = Router;