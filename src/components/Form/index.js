import React from 'react'
import { Button, Form } from 'antd'
import { FORM_BUTTONS, FORM_LAYOUT } from '../../config/constants'
import history from '../../utils/history'

const FormComponent = ({ children, submitting, ...props }) => (
  <Form
    {...FORM_LAYOUT}
    {...props}
  >
    {children}

    <Form.Item {...FORM_BUTTONS}>
      <Button type="primary" loading={submitting} htmlType="submit">Lưu</Button>
      <Button className="ml-50" onClick={() => history.goBack()}>Quay lại</Button>
    </Form.Item>
  </Form>
)

export default FormComponent
