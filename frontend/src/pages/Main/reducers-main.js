import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import app from './reducers'
// import app from '../../components/auth/reducers'
import auth from '../../components/ong/reducers'

const appReducer = combineReducers({
  settings: app,
  form: formReducer,
  auth
})

const initialState = appReducer({}, {})

const rootReducer = (state, action) => {
  if (action.type === 'SIGNOUT_AUTH') {
    console.log('4444444444');
    state = initialState
  }
  return appReducer(state, action)
}
export default rootReducer