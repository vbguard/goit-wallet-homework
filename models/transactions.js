'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Transactions extends Sequelize.Model {}
  
  Transactions.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    sequelize,
    underscored: true
  });
  
  Transactions.associate = (models) => {
    Transactions.belongsTo(models.Users)
  };
  
  return Transactions;
};