import React from 'react'
import { Layout, Menu, Dropdown, Button } from 'antd'
import { Link } from 'react-router-dom'

import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  CloudSyncOutlined,
} from '@ant-design/icons'

/**
 * Begin Redux
 */
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { logout } from '../../utils/helpers'
/**
 * Add other page
 */
import * as authSelectors from '../../store/modules/auth/selectors'
import { trans } from '../../i18n'
/**
 * End Redux Auth
 */

const { Header } = Layout
const HeaderMain = ({ isCollapsed, onCollapse, authUser }) => {
  const MenuIconComponent = () => {
    const MenuIcon = isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined

    return <MenuIcon className="p-4" onClick={onCollapse} />
  }

  const menu = (
    <Menu className="dropdown-list">
      <Menu.Item key="1">
        <Link to="/profiles" className="flex items-center p-1">
          <UserOutlined /> <span className="pl-4">{trans('profile')}</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/change-password" className="flex items-center p-1">
          <CloudSyncOutlined /> <span className="pl-4">{trans('change-password')}</span>
        </Link>
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="7" onClick={logout}>
        <div className="flex items-center p-1">
          <LogoutOutlined className="color-danger" /> <span className="pl-4">{trans('logout')}</span>
        </div>
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Header>
        <div className="flex align-center">
          <MenuIconComponent />
        </div>
        <div className="flex justify-end items-center mr-4">
          <Dropdown overlay={menu} trigger={['click']}>
            <div className="flex items-center pointer relative">
              <span className="fz-4 pr-2">{authUser?.firstname} {authUser?.lastname}</span>
              <img className="rounded-full" width={32} src="/assets/images/tmp.jpg" alt={authUser?.firstname} />
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

export default connect(
  mapStateToProps,
)(HeaderMain)
