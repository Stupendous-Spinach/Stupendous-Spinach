const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('redis').createClient();
// require('dotenv').config();
console.log('redis host', process.env.REDIS_HOST);
console.log('redis port', process.env.REDIS_PORT);
console.log('redis password', process.env.REDIS_PASSWORD);
console.log('redis user', process.env.REDIS_USER);

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    pass: process.env.REDIS_PASSWORD || '',
  }),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});
