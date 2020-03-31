const generateUniqueId = require('../../utils/generateUniqueId');
const connection = require('../../database/connection');

module.exports = {
  async list(request, response) {
    const ongs = await connection('ongs').select('*');
    response({ ongs })
  },

  async create(request, response, callback) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = generateUniqueId();
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    callback({ id })
  }
};