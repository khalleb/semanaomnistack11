import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

import './styles.css'

class Register extends Component {
  render() {
    const { $t, handleRegister } = this.props;
    return (
      <div className="regiter-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be the hero" />
            <h1>{$t('register.register')}</h1>
            <p>{$t('register.labelInfo')}</p>

            <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#E02041" />
              {$t('register.iHaveNoRegistration')}
            </Link>
          </section>
          <form onSubmit={handleRegister}>
            <Field
              name='name'
              component="input"
              type="text"
              placeholder={$t('register.nameONG')}
            />
            <Field
              name='email'
              component="input"
              type="email"
              placeholder={$t('register.email')}
            />
            <Field
              name='whatsapp'
              component="input"
              placeholder={$t('register.whatsApp')}
            />
            <div className="input-group">
              <Field
                name='city'
                component="input"
                type="text"
                placeholder={$t('register.city')}
              />
              <Field
                name='uf'
                style={{ width: 80 }}
                component="input"
                type="text"
                placeholder={$t('register.uf')}
              />
            </div>
            <button className="button" type="submit"> {$t('register.newRegister')}</button>
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
    form: 'register_form'
  })(Register)
)