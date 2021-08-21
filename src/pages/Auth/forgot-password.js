import React from 'react'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import Icon from '../../components/Icon'
import WrapAuth from './wrap'

const ForgotPasswordPage = ({ t }) => {
  const onFinish = (formData) => {
    console.log(formData)
  }

  return (
    <WrapAuth title={t('forgot-password')} onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: t('messages.input', { attr: t('attributes.email') }) }]}
      >
        <Input prefix={<Icon name="mdiEmailOutline" />} placeholder={t('attributes.email')} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full mr-2">
          {t('continue')}
        </Button>
        {t('or')} <Link to="/login" className="">{t('back-to-login')}!</Link>
      </Form.Item>
    </WrapAuth>
  )
}

export default withTranslation()(ForgotPasswordPage)
