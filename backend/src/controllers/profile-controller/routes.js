const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const routes = express.Router();
const Controller = require('./')
const moduleRoute = '/profile'

const callbackFn = (res) => (data) => { res.send(data) }

routes.get(`${moduleRoute}`, celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), (req, res) => {
  Controller.list(req, res, callbackFn(res));
})

module.exports = routes;