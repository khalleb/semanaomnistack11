const express = require('express');
const routes = express.Router();
const Controller = require('./')
const moduleRoute = '/sessions'

const callbackFn = (res) => (data) => { res.send(data) }

routes.post(`${moduleRoute}`, (req, res) => {
  Controller.create(req, res, callbackFn(res));
})

module.exports = routes;