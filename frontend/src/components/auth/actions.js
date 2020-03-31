import axios from "axios";
import _ from 'lodash';
import { ONG_AUTH, FINISH_SESSION } from './constants'
import { toastr } from 'react-redux-toastr';

export async function handleSession() {
  return async (dispatch, getState) => {
    const { settings: { api, $t, history }, form: { logon_form } } = getState();
    const url = `${api}/sessions`;
    const values = _.get(logon_form, 'values', {});
    const data = {
      id: _.get(values, 'idOng')
    }
    await axios.post(url, data)
      .then(async function (response) {
        if (_.get(response, 'data.ong')) {
          localStorage.setItem('_TOKEN', _.get(values, 'idOng'))
          await dispatch([{ type: ONG_AUTH, payload: _.get(response, 'data.ong.name', '') }])
          history.push('/profile');
        }
      })
      .catch(async function (error) {
        toastr.warning($t('messages.alert'), $t('logon.errors.authInvalid'))
      });
  }
}

export function finishSession() {
  return (dispatch, getState) => {
    const { settings: { history } } = getState();
    dispatch({ type: FINISH_SESSION, payload: false })
    localStorage.removeItem('_TOKEN');
    history.push('/')
  }
}