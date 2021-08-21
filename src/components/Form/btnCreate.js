import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import Icon from '../Icon'

const BtnCreate = ({ t, prefix }) => (
  <Link to={`/${prefix}/create`}>
    <Button><Icon name="mdiPlus" /> {t('create')}</Button>
  </Link>
)

export default withTranslation()(BtnCreate)
