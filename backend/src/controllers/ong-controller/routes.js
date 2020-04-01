const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const routes = express.Router();
const passport = require('passport');
const Controller = require('./')
const moduleRoute = '/ongs'

const requireAuth = passport.authenticate('jwt', { session: false })
const callback = (res) => (data) => { res.send(data) }

routes.get(`${moduleRoute}`, (req, res) => {
  Controller.list(req, callback(res));
})

routes.post(`${moduleRoute}`, celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), (req, res) => {
  Controller.create(req, res, callback(res))
})

module.exports = routes;