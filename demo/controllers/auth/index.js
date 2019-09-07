

const { Users, RefreshTokens } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');

class AuthError extends Error {}

module.exports = {
  async login({email, password}) {
    const user = await Users.findOne({ where: { email }});
    
    if (!user) {
      return;
    }
    
    if (!bcrypt.compareSync(password, user.password)) {
      throw new AuthError('Unauthorized');
    }

    return this.generateTokens(user);
  },

  validateToken(token) {
    return jwt.verify(token, config.jwtSecret);
  },
  
  async exchangeRefreshToken(oldRefreshToken) {
    const token = await RefreshTokens.findOne({where: { token: oldRefreshToken}});
    
    if (!token) {
      throw new jwt.JsonWebTokenError('Invalid refresh token');
    }
    
    await token.destroy();
    
    const decoded = jwt.verify(oldRefreshToken, config.jwtSecret);
    
    const user = await Users.findOne({where: {id: decoded.id}});

    return this.generateTokens(user);
  },
  
  async generateTokens(user) {
    const accessToken = jwt.sign({...user.render(), exp: Math.floor(Date.now() / 1000) + 900 }, config.jwtSecret);
    const refreshToken = jwt.sign({id: user.id, exp: Math.floor(Date.now() / 1000) + 3600 * 24 * 7}, config.jwtSecret);

    await RefreshTokens.create({
      token: refreshToken,
      userId: user.id
    });
    
    return {
      accessToken,
      refreshToken
    }
  },
  
  AuthError
};