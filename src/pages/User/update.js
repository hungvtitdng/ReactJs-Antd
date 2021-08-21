import { PageHeader } from 'antd'
import React from 'react'
import Title from '../../components/Title'
import { trans } from '../../i18n'
import UserForm from './_form'

const UserUpdatePage = () => (
  <>
    <Title name={trans('update-user')} />
    <PageHeader title={trans('update-user')} />
    <UserForm />
  </>
)

export default UserUpdatePage
