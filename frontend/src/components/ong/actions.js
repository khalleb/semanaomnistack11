import axios from "axios"
import _ from 'lodash'

export async function handleOng() {
  return async (dispatch, getState) => {
    const { settings: { api, $t, history }, form: { ong_form } } = getState();
    const url = `${api}/ongs`;
    const values = _.get(ong_form, 'values', {});
    const data = {
      name: _.get(values, 'name'),
      email: _.get(values, 'email'),
      whatsapp: _.get(values, 'whatsapp'),
      city: _.get(values, 'city'),
      uf: _.get(values, 'uf')
    }
    debugger
   await axios.post(url, data)
      .then(async function (response) {
        debugger
        let data = _.get(response, 'data', {});
        console.log(data);
      })
      .catch(async function (error) {
        console.log(error);
        debugger
      });
  }
}