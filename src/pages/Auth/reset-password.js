import React from 'react'
import { Button, Form, Input } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { trans } from '../../i18n'
import WrapAuth from './wrap'

const ResetPasswordPage = () => {
  const onFinish = (formData) => {
    console.log(formData)
  }

  return (
    <WrapAuth title={trans('reset-password')} onFinish={onFinish}>
      <Form.Item
        name="new_password"
        rules={[{ required: true, message: trans('messages.input', { attr: trans('attributes.new-password') }) }]}
      >
        <Input prefix={<LockOutlined />} placeholder={trans('attributes.new-password')} />
      </Form.Item>
      <Form.Item
        name="re_new_password"
        rules={[{ required: true, message: trans('messages.input', { attr: trans('attributes.repeat-new-password') }) }]}
      >
        <Input prefix={<LockOutlined />} placeholder={trans('attributes.repeat-new-password')} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          {trans('continue')}
        </Button>
        {trans('or')} <Link to="/login" className="">{trans('back-to-login')}!</Link>
      </Form.Item>
    </WrapAuth>
  )
}

export default ResetPasswordPage
