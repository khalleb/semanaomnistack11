import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

import './styles.css'

class Ong extends Component {
  render() {
    const { $t, handleOng } = this.props;
    return (
      <div className="ong-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be the hero" />
            <h1>{$t('ong.register')}</h1>
            <p>{$t('ong.labelInfo')}</p>

            <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#E02041" />
              {$t('ong.iRaveRegistration')}
            </Link>
          </section>
          <form onSubmit={(e) => e.preventDefault()}>
            <Field
              name='name'
              component="input"
              type="text"
              placeholder={$t('ong.nameONG')}
            />
            <Field
              name='email'
              component="input"
              type="email"
              placeholder={$t('ong.email')}
            />
            <Field
              name='whatsapp'
              component="input"
              placeholder={$t('ong.whatsApp')}
            />
            <div className="input-group">
              <Field
                name='city'
                component="input"
                type="text"
                placeholder={$t('ong.city')}
              />
              <Field
                name='uf'
                style={{ width: 80 }}
                component="input"
                type="text"
                placeholder={$t('ong.uf')}
              />
            </div>
            <button className="button" onClick={handleOng}> {$t('ong.newRegister')}</button>
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
    form: 'ong_form'
  })(Ong)
)