const connection = require('../../database/connection');

module.exports = {
  async list(request, response, callback) {
    const params = request.body;
    const { idOng } = params;

    const incidents = await connection('incidents')
      .where('ong_id', idOng)
      .select('*');

    callback({ incidents })
  }
}