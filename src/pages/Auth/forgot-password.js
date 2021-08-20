import React from 'react'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { trans } from '../../i18n'
import Icon from '../../components/Icon'
import WrapAuth from './wrap'

const ForgotPasswordPage = () => {
  const onFinish = (formData) => {
    console.log(formData)
  }

  return (
    <WrapAuth title={trans('forgot-password')} onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: trans('messages.input', { attr: trans('attributes.email') }) }]}
      >
        <Input prefix={<Icon name="mdiEmailOutline" />} placeholder={trans('attributes.email')} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full mr-2">
          {trans('continue')}
        </Button>
        {trans('or')} <Link to="/login" className="">{trans('back-to-login')}!</Link>
      </Form.Item>
    </WrapAuth>
  )
}

export default ForgotPasswordPage
