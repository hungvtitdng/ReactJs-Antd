import React from 'react'
import { withTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Title from '../../components/Title'

const UserDetailPage = ({ t }) => {
  const params = useParams()
  console.log(params.id)

  return (
    <>
      <Title name={t('user-detail')} />
      <h1>User detail</h1>
    </>
  )
}

export default withTranslation()(UserDetailPage)
