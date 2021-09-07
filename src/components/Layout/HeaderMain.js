import React from 'react'
import { Layout, Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withTranslation } from 'react-i18next'
import { logout } from '../../utils/helpers'
import * as authSelectors from '../../store/modules/auth/selectors'
import Icon from '../Icon'
import Flag from './flags'

const { Header } = Layout
const HeaderMain = ({ isCollapsed, onCollapse, authUser, t }) => {
  const MenuIcon = () => {
    const name = isCollapsed ? 'mdiMenu' : 'mdiMenuOpen'

    return <Icon name={name} size={1} className="color-white ml-2 pointer" onClick={onCollapse} />
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
          <Icon name="mdiLogout" className="color-red" /> <span className="pl-4">{t('logout')}</span>
        </div>
      </Menu.Item>
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
              <img className="rounded-full" width={25} src="/assets/images/tmp.jpg" alt={authUser?.firstname} />
            </div>
          </Dropdown>
          <Flag />
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
