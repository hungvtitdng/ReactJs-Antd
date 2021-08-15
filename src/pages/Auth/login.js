import React from 'react'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import { Link } from 'react-router-dom'
import { trans } from '../../i18n'
import WrapAuth from './wrap'
import { setToken } from '../../utils/helpers'
import history from '../../utils/history'

const LoginPage = () => {
  const onFinish = (formData) => {
    console.log(formData)
    setToken('token')
    history.push('/')
  }

  return (
    <WrapAuth title={trans('login')} onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: trans('messages.input', { attr: trans('attributes.email') }) }]}
      >
        <Input prefix={<UserOutlined />} placeholder={trans('attributes.email')} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: trans('messages.input', { attr: trans('attributes.password') }) }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder={trans('attributes.password')}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{trans('remember-me')}</Checkbox>
        </Form.Item>

        <Link to="/forgot-password" className="float-right">{trans('forgot-password')}</Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full mr-2">
          {trans('login')}
        </Button>
        {trans('or')} <Link to="/register">{trans('register-now')}!</Link>
      </Form.Item>
    </WrapAuth>
  )
}

export default LoginPage
