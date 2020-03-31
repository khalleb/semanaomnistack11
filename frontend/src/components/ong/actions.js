import axios from "axios"
import _ from 'lodash'
import { toastr } from 'react-redux-toastr'

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
    await axios.post(url, data)
      .then(async function (response) {
        toastr.success($t('messages.success'), $t('ong.success.successSave'));
        history.push('/');
      })
      .catch(async function (error) {
        toastr.error($t('messages.alert'), $t('ong.errors.errorSave'));
      });
  }
}