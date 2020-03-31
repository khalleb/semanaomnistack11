import axios from "axios";
import _ from 'lodash';
import { toastr } from 'react-redux-toastr';

export async function handleIncident() {
  return async (dispatch, getState) => {
    const { settings: { api, history }, form: { incident_form } } = getState();
    const url = `${api}/incidents`;
    const values = _.get(incident_form, 'values', {});
    const ongId = localStorage.getItem('_TOKEN');
    const data = {
      title: _.get(values, 'title'),
      description: _.get(values, 'description'),
      value: _.get(values, 'value')
    }
    await axios.post(url, data, { headers: { Authorization: ongId } })
      .then(async function (response) {
        toastr.success('Sucesso', 'Salvo com sucesso');
        history.push('/profile');
      })
      .catch(async function (error) {
        toastr.success('Atenção', 'Erro ao salvar');
      });
  }
}