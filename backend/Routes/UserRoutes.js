const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);
router.post('/createUser', userController.createUser);

module.exports = router;