import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import app from './reducers'
import session from '../../components/auth/reducers'
import ong from '../../components/ong/reducers'
import profile from '../../components/profile/reducers'
import incident from '../../components/incident/reducers'

const appReducer = combineReducers({
  settings: app,
  form: formReducer,
  toastr: toastrReducer,
  session,
  ong,
  profile,
  incident,
})

const initialState = appReducer({}, {})

const rootReducer = (state, action) => {
  if (action.type === 'FINISH_SESSION') {
    state = initialState
  }
  return appReducer(state, action)
}
export default rootReducer