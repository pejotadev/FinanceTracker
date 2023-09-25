const express = require('express');
const Router = express.Router();
const tagController = require('../Controllers/tagsController');

Router.get('/', tagController.getTags);
Router.get('/:id', tagController.getTag);
Router.post('/', tagController.createTag);
Router.put('/:id', tagController.updateTag);
Router.delete('/:id', tagController.deleteTag);

module.exports = Router;