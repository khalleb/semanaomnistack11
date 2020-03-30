const connection = require('../../database/connection');

module.exports = {
  async create(request, response, callback) {
    const { id } = request.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();
    if (!ong) {
      return response.status(400).json({ error: 'Não encontrado uma ONG com esse ID' });
    }
    callback({ ong })
    //return response.json(ong);
  }
}