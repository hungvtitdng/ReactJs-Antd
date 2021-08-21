import { PageHeader } from 'antd'
import React from 'react'
import Title from '../../components/Title'
import { trans } from '../../i18n'
import UserForm from './_form'

const UserCreatePage = () => (
  <>
    <Title name="User Detail" />
    <PageHeader title={trans('create-user')} />
    <UserForm />
  </>
)

export default UserCreatePage
