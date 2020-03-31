import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import _ from 'lodash'
import * as actions from './actions'
import { finishSession } from '../auth/actions'
import logoImg from '../../assets/logo.svg'
import './styles.css'

class Ong extends Component {
  componentDidMount() {
    const { listIncidents } = this.props;
    if (listIncidents) {
      listIncidents()
    }
  }

  finishSession = () => {
    this.props.finishSession()
  }

  render() {
    const { $t, session, removeIncident } = this.props;
    return (
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="Be the hero" />
          <span>{$t('profile.welcome')}, {_.get(session, 'ongAuth')} </span>
          <Link className="button" to="/incidents/new">{$t('profile.registerNewCase')}</Link>
          <button onClick={this.finishSession} type="button">
            <FiPower size={18} color="#E02041" />
          </button>
        </header>
        <h1>{$t('profile.registeredCases')}</h1>
        <ul>
          {(_.get(this, 'props.incidents', [])).map(incident => (
            <li key={_.get(incident, 'id')}>
              <strong>{$t('profile.case')}:</strong>
              <p>{_.get(incident, 'title')}</p>

              <strong>{$t('profile.description')}:</strong>
              <p>{_.get(incident, 'description')}</p>

              <strong>{$t('profile.value')}:</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_.get(incident, 'value', 0))}</p>
              <button onClick={() => removeIncident(_.get(incident, 'id'))} type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))
          }
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  $t: _.get(state, 'settings.$t'),
  session: _.get(state, 'session', {}),
  incidents: _.get(state, 'profile.incidents', [])
})
const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, finishSession }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'profile_form'
  })(Ong)
)