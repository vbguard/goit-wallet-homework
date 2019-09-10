const passport = require('passport');
const {Strategy: LinkedInStrategy} = require('passport-linkedin-oauth2');

const config = require('./config');

passport.use(new LinkedInStrategy({
  clientID: config.linkedIn.clientId,
  clientSecret: config.linkedIn.clientSecret,
  callbackURL: config.linkedIn.callback,
  scope: config.linkedIn.scopes,
}, function (accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

// TODO add strategies for google and facebook


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(id);
});

module.exports = passport;