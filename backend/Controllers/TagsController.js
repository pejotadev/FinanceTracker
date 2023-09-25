const Tags = require('../Models/Tags');

exports.createTag = async function(req, res, next) {
  try {
    const tag = await Tags.create(req.body);
    res.status(201).json(tag);
  } catch (error) {
    next(error);
  }
};

exports.getTags = async function(req, res, next) {
  try {
    const tags = await Tags.findAll();
    res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};

exports.getTag = async function(req, res, next) {
  try {
    const tag = await Tags.findByPk(req.params.id);
    res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
};

exports.updateTag = async function(req, res, next) {
  try {
    const tag = await Tags.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
};

exports.deleteTag = async function(req, res, next) {
  try {
    const tag = await Tags.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
};
