const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('redis').createClient();
require('dotenv').config();

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: process.env.REDIS_CLIENT || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    pass: process.env.REDIS_PASSWORD || '',
    user: process.env.REDIS_USER || 'h'
  }),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});
