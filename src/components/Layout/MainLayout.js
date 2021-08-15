import React, { useState, memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { user } from '../../store/modules/auth/selectors'
import { checkPermission } from '../../routes/permission'

import HeaderMain from './HeaderMain'
import menuItems from './menu'

const { Content, Sider } = Layout

const MainLayout = ({ children, authUser }) => {
  console.log('Main layout rendering')

  const prePath = `/${window.location.pathname.split('/')[1]}`
  const [isCollapsed, setCollapsed] = useState(true)

  useEffect(() => {
    console.log('Runing one times.')
  }, [])

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={isCollapsed} theme="light" className="slider-bar">
        <div className="flex h-screen flex-col">
          <div className="header-logo flex justify-center items-center flex-0-0-auto">
            <span>HV</span>
          </div>

          <Menu className="overflow-y-auto hidden-scrollbar border-r-0" mode="inline" defaultSelectedKeys={[prePath]}>
            {menuItems.map((m) => (
              checkPermission(m.path, authUser?.permissions) ? (
                <Menu.Item key={m.path} icon={<m.icon />}>
                  <Link to={m.path}>{m.title}</Link>
                </Menu.Item>
              ) : null
            ))}
          </Menu>
        </div>
      </Sider>
      <Layout className="flex h-screen">
        <HeaderMain isCollapsed={isCollapsed} onCollapse={() => setCollapsed(!isCollapsed)} />
        <Content className="overflow-y-auto">
          <div className="m-2 p-2 bg-white">
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  authUser: user(),
})

export default memo(connect(
  mapStateToProps,
)(MainLayout))
