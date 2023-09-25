const express = require('express');
const router = express.Router();
const createDatabases = require('../Controllers/CreateDatabaseController');

router.get('/createTables', createDatabases.createTables);

module.exports = router;