import React from 'react'
import { Button, Form, Input, Select } from 'antd'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import WrapAuth from './wrap'

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

const LoginPage = ({ t }) => {
  const onFinish = (formData) => {
    console.log(formData)
  }

  return (
    <WrapAuth title={t('register')} onFinish={onFinish} widthDefault="w-128" {...formItemLayout}>
      <Form.Item
        label={t('attributes.email')}
        name="email"
        rules={[
          {
            type: 'email',
            message: t('messages.in-valid', { attr: t('attributes.email') }),
          },
          {
            required: true,
            message: t('messages.input', { attr: t('attributes.email') }),
          },
        ]}
      >
        <Input
          placeholder={t('placeholders.input', { attr: t('attributes.email') })}
        />
      </Form.Item>
      <Form.Item
        label={t('attributes.password')}
        name="password"
        rules={[{ required: true, message: t('messages.input', { attr: t('attributes.password') }) }]}
      >
        <Input.Password
          placeholder={t('placeholders.input', { attr: t('attributes.password') })}
        />
      </Form.Item>
      <Form.Item
        label={t('attributes.confirm-password')}
        name="confirm_password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: t('messages.input', { attr: t('attributes.confirm-password') }),
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }

              return Promise.reject(new Error(t('messages.confirm-password')))
            },
          }),
        ]}
      >
        <Input.Password
          placeholder={t('placeholders.input', { attr: t('attributes.confirm-password') })}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder={t('placeholders.input', { attr: t('attributes.gender') })}>
          <Select.Option value="male">{t('attributes.male')}</Select.Option>
          <Select.Option value="female">{t('attributes.female')}</Select.Option>
          <Select.Option value="other">{t('attributes.other')}</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className="mr-2">
          {t('register')}
        </Button>
        {t('or')} <Link to="/login" className="">{t('back-to-login')}!</Link>
      </Form.Item>
    </WrapAuth>
  )
}

export default withTranslation()(LoginPage)
