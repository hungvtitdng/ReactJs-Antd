import React from 'react'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import WrapAuth from './wrap'
import Icon from '../../components/Icon'

const ResetPasswordPage = ({ t }) => {
  const onFinish = (formData) => {
    console.log(formData)
  }

  return (
    <WrapAuth title={t('reset-password')} onFinish={onFinish}>
      <Form.Item
        name="new_password"
        rules={[{ required: true, message: t('messages.input', { attr: t('attributes.new-password') }) }]}
      >
        <Input.Password size="large" prefix={<Icon name="mdiLockOutline" />} placeholder={t('attributes.new-password')} />
      </Form.Item>
      <Form.Item
        name="re_new_password"
        rules={[{ required: true, message: t('messages.input', { attr: t('attributes.repeat-new-password') }) }]}
      >
        <Input.Password size="large" prefix={<Icon name="mdiLockOutline" />} placeholder={t('attributes.repeat-new-password')} />
      </Form.Item>

      <Form.Item>
        <Button size="large" type="primary" htmlType="submit" className="w-full mb-2">
          {t('continue')}
        </Button>
        {t('or')} <Link to="/login" className="">{t('login')}!</Link>
      </Form.Item>
    </WrapAuth>
  )
}

export default withTranslation()(ResetPasswordPage)
