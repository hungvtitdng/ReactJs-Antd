import { PageHeader } from 'antd'
import React from 'react'
import { withTranslation } from 'react-i18next'
import Title from '../../components/Title'
import UserForm from './_form'

const UserCreatePage = ({ t }) => (
  <>
    <Title name="User Detail" />
    <PageHeader title={t('create-user')} />
    <UserForm />
  </>
)

export default withTranslation()(UserCreatePage)
