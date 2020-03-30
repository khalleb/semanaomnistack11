const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const SessionController = require('./controllers/session');
const InternationalizationController = require('./controllers/internationalization');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/incident-controller');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

const callbackFn = (res) => (data) => { res.send(data) }

// routes.post('/sessions', SessionController.create);
// routes.get('/internationalization', InternationalizationController.get);

//routes.get('/ongs', OngController.list)

// routes.post('/ongs', celebrate({
//   [Segments.BODY]: Joi.object().keys({
//     name: Joi.string().required(),
//     email: Joi.string().required().email(),
//     whatsapp: Joi.string().required().min(10).max(11),
//     city: Joi.string().required(),
//     uf: Joi.string().required().length(2),
//   })
// }), (req, res) => {
//   OngController.create(req, res, callbackFn(res))
// })


// routes.get('/profile', celebrate({
//   [Segments.HEADERS]: Joi.object({
//     authorization: Joi.string().required()
//   }).unknown()
// }), ProfileController.list)

// routes.get('/incidents', celebrate({
//   [Segments.QUERY]: Joi.object().keys({
//     page: Joi.number(),
//   })
// }), IncidentsController.list)

// routes.post('/incidents', IncidentsController.create)

// routes.delete('/incidents/:id', celebrate({
//   [Segments.PARAMS]: Joi.object().keys({
//     id: Joi.number().required()
//   })
// }), IncidentsController.delete)

module.exports = routes;