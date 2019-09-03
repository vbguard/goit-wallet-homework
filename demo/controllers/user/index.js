'use strict';

const {Users, Transactions} = require('../../models');

module.exports = {
  createUser(payload) {
    return Users.create(payload);
  },

  getUserById(id) {
    return Users.findOne({
      where: {
        id
      },
      include: [{model: Transactions, attributes: ['id', 'user_id']}]
    });
  }
};