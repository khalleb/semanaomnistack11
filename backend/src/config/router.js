module.exports = function(app){
  app.use(require('../controllers/internationalization/routes'))
  app.use(require('../controllers/session/routes'))
  app.use(require('../controllers/ong-controller/routes'))
  app.use(require('../controllers/incident-controller/routes'))
  app.use(require('../controllers/profile-controller/routes'))
}