import axios from 'axios';
import intl from 'react-intl-universal'
import _ from 'lodash';
import moment from 'moment'
import 'moment/locale/fr'
import 'moment/locale/es'
import 'moment/locale/pt-br'

import {
  TO_TRANSLATE,
  HANDLE_INTERNATIONALIZATION,
  HANDLE_HISTORY
} from './constants'

export function applyLocaleInMoment(locale) {
  let name = _.toLower(locale)

  if (name === 'fr-fr') {
    name = 'fr'
  } else if (name === 'es-es') {
    name = 'es'
  }
  moment.locale(name)
}

export function handleLocale(params) {
  return (dispatch, getState) => {
    const { settings: { api } } = getState();
    const url = `${api}/internationalization/locale`
    applyLocaleInMoment(_.get(params, 'locale'))
    axios.get(url, { params })
      .then(resp => {
        let data = _.get(resp, 'data', {})
        intl.init({
          currentLocale: _.get(params, 'locale'),
          locales: _.get(data, 'locale'),
        })
        dispatch([
          {
            type: HANDLE_INTERNATIONALIZATION,
            payload: {
              currentLocale: _.get(params, 'locale'),
              locales: _.get(data, 'locale')
            }
          },
          { type: TO_TRANSLATE, payload: intl }
        ])

        localStorage.setItem('locale', JSON.stringify({
          locale: _.get(params, 'locale')
        }))

      })
      .catch(e => {
        console.error('Failure to load language data', e)
      })
  }
}

export function handleHistory(history) {
  return { type: HANDLE_HISTORY, payload: history }
}