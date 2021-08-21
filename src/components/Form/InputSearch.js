import React from 'react'
import { Input } from 'antd'
import _ from 'lodash'
import { withTranslation } from 'react-i18next'
import Icon from '../Icon'

const InputSearch = ({ t, onFinish, ...props }) => {
  const onSearch = _.debounce((value) => {
    onFinish(value)
  }, 500)

  return (
    <Input
      {...props}
      onChange={(e) => onSearch(e.target.value)}
      className="w-auto"
      placeholder={props.placeholder ?? t('input_search_header')}
      prefix={<Icon name="mdiMagnify" className="color-main" />}
    />
  )
}

export default withTranslation()(InputSearch)
