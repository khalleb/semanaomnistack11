import axios from 'axios'
import _ from 'lodash'


export async function signin(values) {
  return async (dispatch, getState) => {
    const { settings } = getState();
    //const $t = _get_t(settings);
    await axios.post(`${settings.api}/auth/signin`, values)
      .then(async resp => {
        if (resp) {
          localStorage.setItem('_t', _.get(resp, 'data'))
          // toastr.success('Sucesso', 'Login feito')
        }
      })
      .catch(async e => {
        if (_.get(e, 'response.status') === 403) {
          // toastr.error($t('messages.alert'), $t('signIn.errors.noAccess'));
        } else {
          // toastr.error($t('messages.alert'), $t('signIn.errors.signinError'));
        }
      })
  }
}

