import React from 'react'
import { Button, Col, Form, Row, Spin } from 'antd'
import { withTranslation } from 'react-i18next'
import { FORM_BUTTONS, FORM_LAYOUT } from '../../config/constants'
import history from '../../utils/history'

const FormComponent = ({ t, children, submitting, preLoading, ...props }) => (
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
              <Button type="primary" loading={submitting} htmlType="submit">{t('save')}</Button>
              <Button className="ml-2" onClick={() => history.goBack()}>{t('back')}</Button>
            </Form.Item>
          </>
        )}
      </Form>
    </Col>
  </Row>
)

export default withTranslation()(FormComponent)
