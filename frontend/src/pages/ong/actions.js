import axios from "axios"
import _ from 'lodash'

export async function handleRegister() {
  return async (dispatch, getState) => {
    const { settings: { api, $t }, form: { register_form } } = getState();
    const url = `${api}/ongs`;
    const values = _.get(register_form, 'values', {});
    const data = {
      name: _.get(values, 'name'),
      email: _.get(values, 'email'),
      whatsapp: _.get(values, 'whatsapp'),
      city: _.get(values, 'city'),
      uf: _.get(values, 'uf')
    }
    debugger
   await axios.post(url, data)
      .then(resp => {
        console.log(resp);
        debugger
      }).catch(e => {
        console.log(e);
        debugger
      })
  }
}