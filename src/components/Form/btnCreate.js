import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { trans } from '../../i18n'

const BtnCreate = ({ prefix }) => (
  <Link to={`/${prefix}/create`}>
    <Button><PlusOutlined /> {trans('create')}</Button>
  </Link>
)

export default BtnCreate
