'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transactions', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        field: 'user_id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('transactions');
  }
};
