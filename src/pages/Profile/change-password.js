import React from 'react'
import { Col, Form, PageHeader, Row, Input, Button } from 'antd'
import { withTranslation } from 'react-i18next'
import Title from '../../components/Title'

const ChangePasswordPage = ({ t }) => {
  const onFinish = (formData) => {
    console.log(formData)
  }

  return (
    <>
      <Title name={t('attributes.change-password')} />
      <PageHeader className="flex justify-center" title={t('change-password')} />

      <Row>
        <Col md={24} lg={{ span: 16, offset: 4 }} xl={{ span: 12, offset: 6 }} xxl={{ span: 8, offset: 8 }}>
          <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onFinish={onFinish}
          >
            <Form.Item
              label={t('attributes.old-password')}
              name="old_password"
              rules={[{ required: true, message: t('messages.input', { attr: t('attributes.old-password') }) }]}
            >
              <Input.Password placeholder={t('placeholders.input', { attr: t('attributes.old-password') })} />
            </Form.Item>
            <Form.Item
              label={t('attributes.new-password')}
              name="new_password"
              rules={[{ required: true, message: t('messages.input', { attr: t('attributes.new-password') }) }]}
            >
              <Input.Password placeholder={t('placeholders.input', { attr: t('attributes.new-password') })} />
            </Form.Item>
            <Form.Item
              label={t('attributes.repeat-new-password')}
              name="new_password_confirm"
              rules={[{ required: true, message: t('messages.input', { attr: t('attributes.repeat-new-password') }) }]}
            >
              <Input.Password placeholder={t('placeholders.input', { attr: t('attributes.repeat-new-password') })} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
              <Button className="btn" type="primary" htmlType="submit">{t('save')}</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}
export default withTranslation()(ChangePasswordPage)
