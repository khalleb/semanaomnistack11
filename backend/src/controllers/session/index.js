const _ = require('lodash');
const jwt = require('jwt-simple');
const config = require('../../config/config');

function tokenForOng(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ uid: user.id, iat: timestamp }, config.secret);
}

module.exports = {
  login: async (req, res) => {
    let ong = _.cloneDeep(req.user);
    let token = tokenForOng(ong);
    if (!token) {
      return res.status(403).send({ 'error': 'auth.errors.notAllowed' })
    }
    ong.token = token;

    res.json({ ong });
  },
}