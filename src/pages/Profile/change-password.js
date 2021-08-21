import React from 'react'
import { Col, Form, PageHeader, Row, Input, Button } from 'antd'
import Title from '../../components/Title'
import { trans } from '../../i18n'

const ChangePasswordPage = () => {
  const onFinish = (formData) => {
    console.log(formData)
  }

  return (
    <>
      <Title name={trans('attributes.change-password')} />
      <PageHeader className="flex justify-center" title={trans('change-password')} />

      <Row>
        <Col md={24} lg={{ span: 16, offset: 4 }} xl={{ span: 12, offset: 6 }} xxl={{ span: 8, offset: 8 }}>
          <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onFinish={onFinish}
          >
            <Form.Item
              label={trans('attributes.old-password')}
              name="old_password"
              rules={[{ required: true, message: trans('messages.input', { attr: trans('old-password') }) }]}
            >
              <Input.Password placeholder={trans('placeholders.input', { attr: trans('old-password') })} />
            </Form.Item>
            <Form.Item
              label={trans('attributes.new-password')}
              name="new_password"
              rules={[{ required: true, message: trans('messages.input', { attr: trans('new-password') }) }]}
            >
              <Input.Password placeholder={trans('placeholders.input', { attr: trans('new-password') })} />
            </Form.Item>
            <Form.Item
              label={trans('attributes.repeat-new-password')}
              name="new_password_confirm"
              rules={[{ required: true, message: trans('messages.input', { attr: trans('repeat-new-password') }) }]}
            >
              <Input.Password placeholder={trans('placeholders.input', { attr: trans('repeat-new-password') })} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
              <Button className="btn" type="primary" htmlType="submit">Lưu</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}
export default ChangePasswordPage
