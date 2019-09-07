'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING(100),
      allowNull: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING(100),
      allowNull: false
    });
  }
};
