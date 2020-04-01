import axios from "axios";
import _ from 'lodash';
import { LIST_INCIDENTS } from './constants';
import { toastr } from 'react-redux-toastr';
import { authHeader } from '../utils/http'



export async function listIncidents() {
  return async (dispatch, getState) => {
    const { settings: { api, $t }, session: { ongAuth } } = getState();
    const url = `${api}/profile/list`;
    const params = {
      idOng: _.get(ongAuth, 'id')
    }
    await axios.post(url, params, authHeader())
      .then(async function (response) {
        if (_.get(response, 'data.incidents')) {
          await dispatch({ type: LIST_INCIDENTS, payload: _.get(response, 'data.incidents') });
        }
      })
      .catch(async function (error) {
        toastr.error($t('messages.alert'), $t('incident.errors.errorList'));
      });
  }
}

export async function removeIncident(id) {
  return async (dispatch, getState) => {
    const { settings: { api, $t } } = getState();
    if (!id) {
      return
    }
    const url = `${api}/incidents/${id}`;
    await axios.delete(url, authHeader())
      .then(async function (response) {
        if (_.get(response, 'data.incidents')) {
          await dispatch({ type: LIST_INCIDENTS, payload: _.get(response, 'data.incidents') });
          toastr.success($t('messages.success'), $t('profile.success.deleteSuccess'));
        }
      })
      .catch(async function (error) {
        toastr.error($t('messages.alert'), $t('profile.errors.errorRemove'));
      });
  }
}