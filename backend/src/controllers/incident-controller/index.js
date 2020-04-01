const connection = require('../../database/connection');

module.exports = {
  async list(request, response, callback) {
    const { page = 1 } = request.query;
    const [count] = await connection('incidents').count();
    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(['incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf']);
    response.header('X-Total-Count', count['count(*)'])
    callback({ incidents });
  },

  async create(request, response, callback) {
    const { title, description, value, ong_id } = request.body;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });
    callback({ id })
  },
  async delete(request, response, callback) {
    const { list } = module.exports;
    const { id } = request.params;

    await connection('incidents').where('id', id).delete();

    await list({ query: { page: 1 } }, response, (incidents) => {
      callback(incidents)
    });
  }
};