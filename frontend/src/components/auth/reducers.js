import { ONG_AUTH, FINISH_SESSION } from './constants';

const INIT_STATE = {
  ongAuth: {},
  finishSession: ''
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ONG_AUTH:
      return { ...state, ongAuth: action.payload }
    case FINISH_SESSION:
      return { ...state, finishSession: action.payload }
    default:
      return state
  }
}