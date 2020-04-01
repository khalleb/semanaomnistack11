const express = require('express');
const routes = express.Router();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const config = require('../../config/config');
const connection = require('../../database/connection');
const Controller = require('./')
const moduleRoute = '/sessions'

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
  passReqToCallback: true

}
const localLogin = new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
  try {
    let ong = await connection('ongs').where('id', username).select('id', 'name').first();
    if (!ong) {
      return done(null, false)
    }
    return done(null, ong)
  } catch (err) {
    done(err, false)
  }
})


const jwtLogin = new JwtStrategy(jwtOptions, async (req, payload, done) => {
  try {
    let ong = await connection('ongs').where('id', payload.uid).first();
    if (!ong) {
      return done(null, false)
    }
    req.ong = ong;
    done(null, { ...ong })
  } catch (error) {
    done(error, false);
  }
})

passport.use(jwtLogin);
passport.use(localLogin);
const requireSignin = passport.authenticate('local', { session: false });
routes.post(`${moduleRoute}`, requireSignin, Controller.login);

module.exports = routes;