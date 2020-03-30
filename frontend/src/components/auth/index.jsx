import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import _ from 'lodash'
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/logo.svg'
import heroesImage from '../../assets/heroes.png'
import { handleLocale } from '../../pages/Main/actions'

class Logon extends Component {

  componentDidMount() {
    const { handleLocale } = this.props;
    if (handleLocale) {
      let localeObj = {};
      try {
        localeObj = JSON.parse(localStorage.getItem('locale'))
        handleLocale({
          locale: _.get(localeObj, 'locale') || navigator.language || 'pt-BR',
          flag: _.get(localeObj, 'flag') || 'br',
        })
      } catch (error) {
      }
    }
  }

  render() {
    const { $t } = this.props;
    return (
      <div className="logon-container">
        <section className="form">
          <img src={logoImg} />
          <form onSubmit={() => { }}>
            <h1>{$t('logon.makeYourWish')}</h1>

            <input
              placeholder={$t('logon.yourID')}
              //value={id}
              onChange={() => { }}
            />
            <button className="button" type="submit">{$t('logon.enter')}</button>

            <Link className="back-link" to="/ong/new">
              <FiLogIn size={16} color="#E02041" />
              {$t('logon.iHaveNoRegistration')}
            </Link>
          </form>
        </section>
        <img src={heroesImage} alt="Heroes" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  $t: state.settings.$t
})
const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, handleLocale }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Logon)