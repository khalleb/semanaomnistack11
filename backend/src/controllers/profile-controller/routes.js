const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const passport = require('passport');
const routes = express.Router();
const Controller = require('./')
const moduleRoute = '/profile'

const requireAuth = passport.authenticate('jwt', { session: false })

const callbackFn = (res) => (data) => { res.send(data) }

routes.post(`${moduleRoute}/list`, requireAuth, (req, res) => {
  Controller.list(req, res, callbackFn(res));
})

module.exports = routes;