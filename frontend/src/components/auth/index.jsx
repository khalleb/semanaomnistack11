import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import _ from 'lodash'
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css'
import logoImg from '../../assets/logo.svg'
import heroesImage from '../../assets/heroes.png'
import { handleHistory, handleLocale } from '../main/actions'

class Logon extends Component {

  componentDidMount() {
    const { handleLocale, handleHistory, history } = this.props;
    if (handleLocale) {
      let localeObj = {};
      try {
        localeObj = JSON.parse(localStorage.getItem('locale'))
      } catch (error) { }
      handleLocale({
        locale: _.get(localeObj, 'locale') || navigator.language || 'pt-BR',
        flag: _.get(localeObj, 'flag') || 'br',
      })
      handleHistory(history);
    }
  }

  render() {
    const { $t, handleSession } = this.props;
    return (
      <>
        <div className="logon-container">
          <section className="form">
            <img alt="imagem logo" src={logoImg} />
            <form onSubmit={(e) => e.preventDefault()}>
              <h1>{$t('logon.makeYourWish')}</h1>
              <Field
                name='idOng'
                component="input"
                type="text"
                placeholder={$t('logon.yourID')}
              />
              <button className="button" onClick={handleSession}>{$t('logon.enter')}</button>
              <Link className="back-link" to="/ong/new">
                <FiLogIn size={16} color="#E02041" />
                {$t('logon.iHaveNoRegistration')}
              </Link>
            </form>
          </section>
          <img src={heroesImage} alt="Heroes" />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  $t: state.settings.$t
})
const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, handleHistory, handleLocale }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'logon_form'
  })(Logon)
)