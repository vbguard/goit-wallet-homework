'use strict';

const { Transactions } = require('../../models');

module.exports = {
  
  getUserTransactions(user, {offset = 0, limit = 10}) {
    return Transactions.findAll({ where: { user_id: user.id }, offset, limit, attributes: ['id', 'user_id']});
  },
  
  addIncomeTransaction(income) {
    // TODO should be implemented income creating and return transaction
  },

  addCostsTransaction(costs) {
    // TODO should be implemented expense creating and return transaction
  }
  
};