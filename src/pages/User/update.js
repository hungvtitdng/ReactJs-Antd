import { PageHeader } from 'antd'
import React from 'react'
import { withTranslation } from 'react-i18next'
import Title from '../../components/Title'
import UserForm from './_form'

const UserUpdatePage = ({ t }) => (
  <>
    <Title name={t('update-user')} />
    <PageHeader title={t('update-user')} />
    <UserForm />
  </>
)

export default withTranslation()(UserUpdatePage)
