'use strict';


const {ValidationError} = require('sequelize');

module.exports = function validationErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(400).json(err);
  }
  
  next(err);
};