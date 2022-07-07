import React from 'react'
import { Button, Form, Input } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import Title from '../../components/Title'
import { useInjectReducer } from '../../store/injectReducer'
import { useInjectSaga } from '../../store/injectSaga'
import saga from '../../store/modules/auth/saga'
import reducer from '../../store/modules/auth/reducer'
import * as selectors from '../../store/modules/auth/selectors'
import * as authActions from '../../store/modules/auth/actions'
import WrapAuth from './wrap'

const key = 'auth'

const LoginPage = ({ t, authActionsProps }) => {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  const onFinish = (formData) => {
    authActionsProps.loginRequestAction(formData)
  }

  return (
    <>
      <Title name={t('login')} />
      <WrapAuth title={t('login')} onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: t('messages.input', { attr: t('attributes.email') }) }]}
        >
          <Input size="large" placeholder={t('attributes.email')} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: t('messages.input', { attr: t('attributes.password') }) }]}
        >
          <Input.Password
            size="large"
            placeholder={t('attributes.password')}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>{t('remember-me')}</Checkbox>
          </Form.Item>

          <Link to="/forgot-password" className="float-right">{t('forgot-password')}</Link>
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="w-full mb-2"
          >
            {t('login')}
          </Button>
          {t('or')} <Link to="/register">{t('register')}!</Link>
        </Form.Item>
      </WrapAuth>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  submitting: selectors.submitting(),
})

const mapDispatchToProps = (dispatch) => ({
  authActionsProps: bindActionCreators(authActions, dispatch),
})

export default withTranslation()(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LoginPage),
)
