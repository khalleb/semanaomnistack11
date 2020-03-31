import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FiArrowLeft } from 'react-icons/fi'
import * as actions from './actions'
import logoImg from '../../assets/logo.svg'
import './styles.css'

class Incident extends Component {
  render() {
    const { $t, handleIncident } = this.props;
    return (
      <div className="new-incident">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be the hero" />
            <h1>{$t('incident.registerNewCase')}</h1>
            <p>{$t('incident.labelInfo')}</p>
            <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#E02041" />
              {$t('incident.backToHome')}
            </Link>
          </section>
          <form onSubmit={(e) => e.preventDefault()}>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder={$t('incident.caseTitle')}
            />
            <Field
              name="description"
              component="textarea"
              type="text"
              placeholder={$t('incident.description')}
            />
            <Field
              name="value"
              component="input"
              type="text"
              placeholder={$t('incident.value')}
            />
            <button className="button" onClick={handleIncident}>{$t('incident.newRegister')}</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  $t: state.settings.$t
})
const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'incident_form'
  })(Incident)
)