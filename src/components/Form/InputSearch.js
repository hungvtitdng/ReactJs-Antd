import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import _ from 'lodash'
import { trans } from '../../i18n'

const InputSearch = ({ onFinish, ...props }) => {
  const onSearch = _.debounce((value) => {
    onFinish(value)
  }, 500)

  return (
    <Input
      {...props}
      onChange={(e) => onSearch(e.target.value)}
      className="w-auto"
      placeholder={props.placeholder ?? trans('input_search_header')}
      prefix={<SearchOutlined className="color-main" />}
    />
  )
}

export default InputSearch
