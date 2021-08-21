import React from 'react'
import { Button, Col, Form, Row, Spin } from 'antd'
import { FORM_BUTTONS, FORM_LAYOUT } from '../../config/constants'
import history from '../../utils/history'
import { trans } from '../../i18n'

const FormComponent = ({ children, submitting, preLoading, ...props }) => (
  <Row>
    <Col md={24} lg={{ span: 16, offset: 4 }} xl={{ span: 12, offset: 6 }} xxl={{ span: 10, offset: 7 }}>
      <Form
        {...FORM_LAYOUT}
        {...props}
      >
        {preLoading ? <Spin className="w-full text-center" size="large" /> : (
          <>
            {children}

            <Form.Item {...FORM_BUTTONS}>
              <Button type="primary" loading={submitting} htmlType="submit">{trans('save')}</Button>
              <Button className="ml-2" onClick={() => history.goBack()}>{trans('back')}</Button>
            </Form.Item>
          </>
        )}
      </Form>
    </Col>
  </Row>
)

export default FormComponent
