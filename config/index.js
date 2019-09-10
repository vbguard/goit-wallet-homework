module.exports = {
  PORT: process.env.PORT || 5001,
  cookieSecret: process.env.COOKIE_SECRET || 'qwerty',
  jwtSecret: process.env.JWT_SECRET || 'qwerty',
  
  linkedIn: {
    clientId: process.env.LINKEDIN_CLIENT_ID || '86ukx4o08pzibu',
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET || 'aSSanMt8IADsykhz',
    callback: 'http://localhost:5001/api/auth/linkedin/callback',
    scopes: ['r_emailaddress', 'r_liteprofile']
  }
};
