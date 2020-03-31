import { LIST_INCIDENTS } from './constants';

const INIT_STATE = {
  incidents: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_INCIDENTS:
      return { ...state, incidents: action.payload }
    default:
      return state
  }
}