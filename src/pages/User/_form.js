import React, { useEffect } from 'react'
import { Input, Form } from 'antd'
import { useParams } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FormComponent from '../../components/Form'
import { trans } from '../../i18n'
import * as selectors from '../../store/modules/user/selectors'
import * as userActions from '../../store/modules/user/actions'
import { useInjectReducer } from '../../store/injectReducer'
import { useInjectSaga } from '../../store/injectSaga'
import saga from '../../store/modules/user/saga'
import reducer from '../../store/modules/user/reducer'

const key = 'user'
const UserForm = ({ userActionsProp, detail, submitting, loading }) => {
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
        label={trans('attributes.username')}
        rules={[{ required: true, message: trans('messages.input', { attr: 'username' }) }]}
      >
        <Input placeholder={trans('messages.input', { attr: 'username' })} />
      </Form.Item>
      <Form.Item
        name="name"
        label={trans('attributes.name')}
        rules={[{ required: true, message: trans('messages.input', { attr: 'name' }) }]}
      >
        <Input placeholder={trans('messages.input', { attr: 'name' })} />
      </Form.Item>
      <Form.Item
        name="email"
        label={trans('attributes.email')}
        rules={[{ required: true, message: trans('messages.input', { attr: 'email' }) }]}
      >
        <Input placeholder={trans('messages.input', { attr: 'email' })} />
      </Form.Item>
      <Form.Item
        name="phone"
        label={trans('attributes.phone')}
        rules={[{ required: true, message: trans('messages.input', { attr: 'phone' }) }]}
      >
        <Input placeholder={trans('messages.input', { attr: 'phone' })} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserForm)
