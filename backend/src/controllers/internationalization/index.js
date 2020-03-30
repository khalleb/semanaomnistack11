const _ = require('lodash')
const locales = {
  'pt-BR': require('./locales/pt-BR.json'),
  'en-US': require('./locales/en-US.json')
}
module.exports = {
  get: (request, response) => {
    const { locale = 'pt-BR', flag } = request.query;
    response({ locale: _.pick(locales, [locale]), flag })
    //return response.json({ locale: _.pick(locales, [locale]), flag });
  }
}