const express = require('express');
const routes = express.Router();
const Controller = require('./')
const moduleRoute = '/internationalization'

routes.get(`${moduleRoute}/locale`, (req, res) => {
  Controller.get(req, (response) => {
    res.send(response)
  })
});

module.exports = routes;