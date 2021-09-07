import React, { useEffect, useState } from 'react'
import { Form, Input, Row, Col, Card, Button } from 'antd'
import { withTranslation } from 'react-i18next'
import Title from '../../components/Title'
import Icon from '../../components/Icon'

const ProfilePage = ({ t }) => {
  const [form] = Form.useForm()
  const [isEdit, setEdit] = useState(false)

  useEffect(() => {
    if (!isEdit) {
      form.resetFields()
    }
  }, [isEdit])

  return (
    <>
      <Title name={t('profile')} />
      <Row className="pt-4" gutter={16}>
        <Col md={24} lg={12} xl={12} className="flex">
          <Card
            title={<span className="fz-5 bold">{t('profile-detail')}</span>}
            bordered={false}
            className="mb-4 w-full shadown-full shadown-full-hover transition"
            extra={(
              <Button type="link" className="p-0 h-auto" onClick={() => setEdit(!isEdit)}>
                {isEdit ?
                  <Icon name="mdiWindowClose" className="color-red" /> :
                  <Icon name="mdiAccountEditOutline" className="color-blue" />
                }
              </Button>
            )}
          >
            <Form
              form={form}
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}
              labelAlign="left"
              colon={false}
            >
              <Form.Item
                label={<span className="bold">{t('attributes.firstname')}</span>}
                name="firstname"
                rules={[{ required: isEdit, message: t('messages.input', { attr: t('attributes.firstname') }) }]}
              >
                {isEdit ?
                  <Input placeholder={t('placeholders.input', { attr: t('attributes.firstname') })} /> :
                  <span>Hung</span>
                }
              </Form.Item>
              <Form.Item
                label={<span className="bold">{t('attributes.lastname')}</span>}
                name="lastname"
                rules={[{ required: isEdit, message: t('messages.input', { attr: t('attributes.lastname') }) }]}
              >
                {isEdit ?
                  <Input placeholder={t('placeholders.input', { attr: t('attributes.lastname') })} /> :
                  <span>Vo Tien</span>
                }
              </Form.Item>

              <Form.Item
                label={<span className="bold">{t('attributes.email')}</span>}
                name="email"
                rules={[{ required: isEdit, message: t('messages.input', { attr: t('attributes.email') }) }]}
              >
                {isEdit ?
                  <Input placeholder={t('placeholders.input', { attr: t('attributes.email') })} /> :
                  <span>hungvt.itdng@gmail.com</span>
                }
              </Form.Item>
              <Form.Item
                label={<span className="bold">{t('attributes.birthday')}</span>}
                name="birthday"
                rules={[{ required: isEdit, message: t('messages.input', { attr: t('attributes.birthday') }) }]}
              >
                {isEdit ?
                  <Input placeholder={t('placeholders.input', { attr: t('attributes.birthday') })} /> :
                  <span>25/06/1988</span>
                }
              </Form.Item>
              <Form.Item
                label={<span className="bold">{t('attributes.gender')}</span>}
                name="gender"
                rules={[{ required: isEdit, message: t('messages.input', { attr: t('attributes.gender') }) }]}
              >
                {isEdit ?
                  <Input placeholder={t('placeholders.input', { attr: t('attributes.gender') })} /> :
                  <span>Nam</span>
                }
              </Form.Item>
              <Form.Item
                label={<span className="bold">{t('attributes.address')}</span>}
                name="address"
                rules={[{ required: isEdit, message: t('messages.input', { attr: t('attributes.address') }) }]}
              >
                {isEdit ?
                  <Input placeholder={t('placeholders.input', { attr: t('attributes.address') })} /> :
                  <span>Nam</span>
                }
              </Form.Item>

              {isEdit && (
                <Form.Item wrapperCol={{ span: 24 }}>
                  <Button type="primary" htmlType="submit" className="w-full">{t('save')}</Button>
                </Form.Item>
              )}
            </Form>
          </Card>
        </Col>
        <Col md={24} lg={12} xl={12} className="flex">
          <Card
            title={<span className="fz-5 bold">{t('other-info')}</span>}
            bordered={false}
            className="mb-4 w-full shadown-full shadown-full-hover transition"
          >
            <Form
              form={form}
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}
              labelAlign="left"
              colon={false}
            >
              <Form.Item label={<span className="bold">{t('department')}</span>}>
                <span>Quản lý</span>
              </Form.Item>
              <Form.Item label={<span className="bold">{t('position')}</span>}>
                <span>Giám đốc</span>
              </Form.Item>
              <Form.Item label={<span className="bold">{t('working-start-date')}</span>}>
                <span>24/12/2019</span>
              </Form.Item>
              <Form.Item label={<span className="bold">{t('roles')}</span>}>
                <span>Quản lý, Thu ngân</span>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>

    </>
  )
}
export default withTranslation()(ProfilePage)
