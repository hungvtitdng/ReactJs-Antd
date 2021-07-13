import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import { trans } from '../../i18n'

const UnauthorizedPage = () => (
  <Result
    status="403"
    title="403"
    subTitle="403 Unauthorized"
    extra={<Link to="/"><Button type="primary">{trans('back_home')}</Button></Link>}
  />
)

export default UnauthorizedPage
