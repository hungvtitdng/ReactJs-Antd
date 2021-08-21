import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

const NotFoundPage = ({ t }) => (
  <Result
    status="404"
    title="404"
    subTitle={t('message_404')}
    extra={<Link to="/"><Button type="primary">{t('back_home')}</Button></Link>}
  />
)

export default withTranslation()(NotFoundPage)
