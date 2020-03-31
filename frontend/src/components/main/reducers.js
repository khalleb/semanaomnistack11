import _ from 'lodash'
import { HANDLE_HISTORY, TO_TRANSLATE, HANDLE_INTERNATIONALIZATION }
  from './constants'

const INITIAL_STATE = {
  api: 'http://localhost:3333',
  history: {},
  toTranslate: {},
  $t: _.identity,
  internationalization: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_HISTORY:
      return { ...state, history: action.payload }
    case TO_TRANSLATE:
      let toTranslate = action.payload
      return { ...state, toTranslate, $t: (str = '', args = '') => (_.invoke(toTranslate, 'get', String(str), args) || str) }
    case HANDLE_INTERNATIONALIZATION:
      return { ...state, internationalization: action.payload }
    default:
      return state
  }
}