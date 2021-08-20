import React from 'react'
import { Button, Form, Input, Select } from 'antd'
import { Link } from 'react-router-dom'
import { trans } from '../../i18n'
import WrapAuth from './wrap'
import Icon from '../../components/Icon'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const LoginPage = () => {
  const onFinish = (formData) => {
    console.log(formData)
  }

  return (
    <WrapAuth title={trans('register')} onFinish={onFinish} widthDefault="w-128" {...formItemLayout}>
      <Form.Item
        label={trans('attributes.email')}
        name="email"
        rules={[
          {
            type: 'email',
            message: trans('messages.in-valid', { attr: trans('attributes.email') }),
          },
          {
            required: true,
            message: trans('messages.input', { attr: trans('attributes.email') }),
          },
        ]}
      >
        <Input
          placeholder={trans('placeholders.input', { attr: trans('attributes.email') })}
        />
      </Form.Item>
      <Form.Item
        label={trans('attributes.password')}
        name="password"
        rules={[{ required: true, message: trans('messages.input', { attr: trans('attributes.password') }) }]}
      >
        <Input.Password
          placeholder={trans('placeholders.input', { attr: trans('attributes.password') })}
        />
      </Form.Item>
      <Form.Item
        label={trans('attributes.confirm-password')}
        name="confirm_password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: trans('messages.input', { attr: trans('attributes.confirm-password') }),
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }

              return Promise.reject(new Error(trans('messages.confirm-password')))
            },
          }),
        ]}
      >
        <Input.Password
          placeholder={trans('placeholders.input', { attr: trans('attributes.confirm-password') })}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder={trans('placeholders.input', { attr: trans('attributes.gender') })}>
          <Select.Option value="male">{trans('attributes.male')}</Select.Option>
          <Select.Option value="female">{trans('attributes.female')}</Select.Option>
          <Select.Option value="other">{trans('attributes.other')}</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className="mr-2">
          {trans('register')}
        </Button>
        {trans('or')} <Link to="/login" className="">{trans('back-to-login')}!</Link>
      </Form.Item>
    </WrapAuth>
  )
}

export default LoginPage
