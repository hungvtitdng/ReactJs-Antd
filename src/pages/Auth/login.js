import React from 'react'
import { Button, Form, Input } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import WrapAuth from './wrap'
import { setToken } from '../../utils/helpers'
import history from '../../utils/history'

const LoginPage = ({ t }) => {
  const onFinish = (formData) => {
    console.log(formData)
    setToken('token')
    history.push('/')
  }

  return (
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
  )
}

export default withTranslation()(LoginPage)
