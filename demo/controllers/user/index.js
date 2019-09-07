'use strict';

const {Users} = require('../../models');

module.exports = {
  createUser(payload) {
    return Users.create(payload);
  },

  getUserById(id) {
    return Users.findOne({
      where: {
        id
      }
    });
  },

  async getLinkedInUser(linkedInUser) {
    let user = await Users.findOne({where: {
      email: linkedInUser.emails[0].value
      }});
    
    if (!user) {
      user = await Users.create({
        firstName: linkedInUser.name.givenName,
        lastName: linkedInUser.name.familyName,
        email: linkedInUser.emails[0].value,
        linkedInId: linkedInUser.id
      })
    }
    
    return user;
  },

  searchUsers({offset = 0, limit = 10}) {
    return Users.findAll({limit, offset});
  }
};

