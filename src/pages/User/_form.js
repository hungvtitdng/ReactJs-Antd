import React, { useEffect } from 'react'
import { Input, Form } from 'antd'
import { useParams } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import FormComponent from '../../components/Form'
import * as selectors from '../../store/modules/user/selectors'
import * as userActions from '../../store/modules/user/actions'
import { useInjectReducer } from '../../store/injectReducer'
import { useInjectSaga } from '../../store/injectSaga'
import saga from '../../store/modules/user/saga'
import reducer from '../../store/modules/user/reducer'

const key = 'user'
const UserForm = ({ t, userActionsProp, detail, submitting, loading }) => {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  const [form] = Form.useForm()
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      userActionsProp.getDetailAction(params.id)
    }
  }, [])

  useEffect(() => {
    if (params.id && detail) {
      form.setFieldsValue(detail)
    }
  }, [detail])

  const onFinish = (formData) => {
    console.log(formData)

    if (params.id) {
      console.log('Update')
    } else {
      console.log('Create')
    }
  }

  return (
    <FormComponent
      form={form}
      onFinish={onFinish}
      preLoading={params.id && loading}
      submitting={submitting}
    >
      <Form.Item
        name="username"
        label={t('attributes.username')}
        rules={[{ required: true, message: t('messages.input', { attr: 'username' }) }]}
      >
        <Input placeholder={t('messages.input', { attr: 'username' })} />
      </Form.Item>
      <Form.Item
        name="name"
        label={t('attributes.name')}
        rules={[{ required: true, message: t('messages.input', { attr: 'name' }) }]}
      >
        <Input placeholder={t('messages.input', { attr: 'name' })} />
      </Form.Item>
      <Form.Item
        name="email"
        label={t('attributes.email')}
        rules={[{ required: true, message: t('messages.input', { attr: 'email' }) }]}
      >
        <Input placeholder={t('messages.input', { attr: 'email' })} />
      </Form.Item>
      <Form.Item
        name="phone"
        label={t('attributes.phone')}
        rules={[{ required: true, message: t('messages.input', { attr: 'phone' }) }]}
      >
        <Input placeholder={t('messages.input', { attr: 'phone' })} />
      </Form.Item>
    </FormComponent>
  )
}

const mapStateToProps = createStructuredSelector({
  detail: selectors.detail(),
  loading: selectors.loading(),
  submitting: selectors.submitting(),
})

const mapDispatchToProps = (dispatch) => ({
  userActionsProp: bindActionCreators(userActions, dispatch),
})

export default withTranslation()(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserForm),
)
