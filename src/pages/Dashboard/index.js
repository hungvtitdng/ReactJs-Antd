import React from 'react'
import { withTranslation } from 'react-i18next'
import Title from '../../components/Title'

const DashboardPage = ({ t }) => (
  <>
    <Title name={t('dashboard')} />
    <h1>Dashboard</h1>
  </>
)

export default withTranslation()(DashboardPage)
