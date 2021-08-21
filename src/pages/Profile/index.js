import React from 'react'
import { withTranslation } from 'react-i18next'
import Title from '../../components/Title'

const ProfilePage = ({ t }) => (
  <>
    <Title name={t('profile')} />
    <h1>Profile page</h1>
  </>
)

export default withTranslation()(ProfilePage)
