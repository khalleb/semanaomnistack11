import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from '../components/auth/index'
import Ong from '../components/ong/index'
import Profile from '../components/profile/index'
import Incident from '../components/incident/index'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Logon} />
          <Route exact path="/ong/new" component={Ong} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/incidents/new" component={Incident} />
        </Switch>
      </BrowserRouter >
    )
  }
}

const mapStateToProps = state => ({ settings: state.settings, auth: state.auth })
export default connect(mapStateToProps)(Routes)