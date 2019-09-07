'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class RefreshTokens extends Sequelize.Model {}

  RefreshTokens.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER
    },
    token: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    underscored: true,
    timestamps: false
  });

  RefreshTokens.associate = (models) => {
    RefreshTokens.belongsTo(models.Users)
  };

  return RefreshTokens;
};