import React from 'react'
import { Dropdown, Menu } from 'antd'
import i18n from '../../i18n'

const flags = {
  vi: {
    key: 'vi',
    name_vi: 'Tiếng Việt',
    'name_en-US': 'Vietnamese',
    icon: '🇻🇳',
  },
  'en-US': {
    key: 'en-US',
    name_vi: 'Tiếng Anh',
    'name_en-US': 'English',
    icon: '🇺🇸',
  },
}

const Flag = ({ hasText, textClass, ...props }) => {
  const flagsMenu = (
    <Menu className="dropdown-list w-150px">
      {Object.values(flags).map((flag) => (
        <Menu.Item key={flag.key} onClick={() => i18n.changeLanguage(flag.key)}>
          <span className="fz-4">{flag.icon}</span> <span className="pl-4">{flag[`name_${i18n.language}`]}</span>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Dropdown overlay={flagsMenu} trigger={['click']} {...props}>
      <div className="flex items-center pointer relative pl-3">
        {hasText && <span className={`mr-2 ${textClass}`}>{flags[i18n.language][`name_${i18n.language}`]}</span>}
        <span className="fz-6 pr-2">{flags[i18n.language].icon}</span>
      </div>
    </Dropdown>
  )
}

export default Flag
