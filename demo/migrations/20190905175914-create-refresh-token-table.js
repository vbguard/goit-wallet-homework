'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('refresh_tokens', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        token: {
          type: Sequelize.STRING,
          allowNull: false
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
    return queryInterface.dropTable('refresh_tokens');
  }
};
