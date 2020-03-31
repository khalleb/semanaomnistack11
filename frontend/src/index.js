import React from 'react';
import ReactDOM from 'react-dom';


import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'

import reducers from './components/main/reducers-main'
import Routes from './config/routes'
import { createHashHistory } from 'history'

import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './global.css'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
const history = createHashHistory();

ReactDOM.render(
  <Provider store={store} history={history}>
    <div>
      <Routes />
      <ReduxToastr
        timeout={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />
    </div>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./config/routes', () => {
    const NextApp = require('./config/routes').default;
    ReactDOM.render(
      <Provider store={store} history={history}>
        <NextApp />
      </Provider>,
      document.getElementById('root')
    )
  })
}