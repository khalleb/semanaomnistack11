import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import _ from 'lodash'

import './styles.css'

const phone = value => {
  const onlyNums = value.replace(/[^\d]/g, '')
  const residential = `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 6)} ${onlyNums.slice(6, 19)}`
  const cellPhone = `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 7)} ${onlyNums.slice(7, 20)}`
  if (onlyNums.length < 10) { return onlyNums }
  if (onlyNums.length === 10) { return residential }
  if (onlyNums.length >= 11) { return cellPhone.substr(0, 15) }
}

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
              normalize={phone}
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
                name="uf"
                component="select"
                style={{ width: 80 }}ˆ>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">AP</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </Field>
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