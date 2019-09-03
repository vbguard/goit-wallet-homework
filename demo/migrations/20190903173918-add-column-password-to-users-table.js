'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('users', 'password', {
        type: Sequelize.STRING(100),
        allowNull: false
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('users', 'password');
  }
};
