import React from 'react'
import { Layout, Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withTranslation } from 'react-i18next'
import { logout } from '../../utils/helpers'
import * as authSelectors from '../../store/modules/auth/selectors'
import i18n from '../../i18n'
import Icon from '../Icon'
import flags from './flags'

const { Header } = Layout
const HeaderMain = ({ isCollapsed, onCollapse, authUser, t }) => {
  const MenuIcon = () => {
    const name = isCollapsed ? 'mdiMenu' : 'mdiMenuOpen'

    return <Icon name={name} size={1} className="color-white ml-2 pointer" onClick={onCollapse} />
  }

  const changeLanguage = (lang) => {
    console.log(lang)
    i18n.changeLanguage(lang)
  }

  const userActions = (
    <Menu className="dropdown-list">
      <Menu.Item key="1">
        <Link to="/profiles" className="flex items-center p-1">
          <Icon name="mdiAccountOutline" /> <span className="pl-4">{t('profile')}</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/change-password" className="flex items-center p-1">
          <Icon name="mdiShieldKeyOutline" /> <span className="pl-4">{t('change-password')}</span>
        </Link>
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="7" onClick={logout}>
        <div className="flex items-center p-1">
          <Icon name="mdiLogout" className="color-danger" /> <span className="pl-4">{t('logout')}</span>
        </div>
      </Menu.Item>
    </Menu>
  )

  const flagsMenu = (
    <Menu className="dropdown-list w-150px">
      {Object.values(flags).map((flag) => (
        <Menu.Item key={flag.key} onClick={() => changeLanguage(flag.key)}>
          <span className="fz-4">{flag.icon}</span> <span className="pl-4">{flag[`name_${i18n.language}`]}</span>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <>
      <Header>
        <div className="flex items-center">
          <MenuIcon />
        </div>
        <div className="flex justify-end items-center mr-4">
          <Dropdown overlay={userActions} trigger={['click']}>
            <div className="flex items-center pointer relative pl-3">
              <span className="fz-4 pr-2">{authUser?.firstname} {authUser?.lastname}</span>
              <img className="rounded-full" width={32} src="/assets/images/tmp.jpg" alt={authUser?.firstname} />
            </div>
          </Dropdown>
          <Dropdown overlay={flagsMenu} trigger={['click']}>
            <div className="flex items-center pointer relative pl-3">
              <span className="fz-5 pr-2">{flags[i18n.language].icon}</span>
            </div>
          </Dropdown>
        </div>
      </Header>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  authUser: authSelectors.user(),
})

export default withTranslation()(connect(
  mapStateToProps,
)(HeaderMain))
