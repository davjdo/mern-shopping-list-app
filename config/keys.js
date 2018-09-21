const keys = {
  production: {
    DATABASE: process.env.MONGODB_URI
  },
  default: {
    DATABASE: 'mongodb://localhost:27017/mern-shopping-list'
  }
};

exports.get = function get(env) {
  return keys[env] || keys.default;
};
