import React, { useState, memo } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { checkPermission } from '../../routes/permission'
import { user } from '../../store/modules/auth/selectors'
import HeaderMain from './HeaderMain'
import menuItems from './menu'

const { Content, Sider } = Layout

const MainLayout = ({ children, userInfo }) => {
  console.log('MainLayout')

  const [isCollapsed, setCollapsed] = useState(true)

  const prePath = `/${window.location.pathname.split('/')[1]}`

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className="slider-left" trigger={null} collapsible collapsed={isCollapsed}>
        <div className="logo-container">
          <Link to="/">
            <img width={60} src="https://picsum.photos/200" alt="Logo" />
          </Link>
        </div>

        <Menu className="menu-left" theme="dark" mode="inline" defaultSelectedKeys={[prePath]}>
          {menuItems.map((m) => (
            checkPermission(userInfo) ? (
              <Menu.Item key={m.path} icon={<m.icon />}>
                <Link to={m.path}>{m.title}</Link>
              </Menu.Item>
            ) : null
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <HeaderMain isCollapsed={isCollapsed} onCollapse={() => setCollapsed(!isCollapsed)} />
        <Content className="wrapper-layout">
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  userInfo: user(),
})

export default memo(connect(mapStateToProps)(MainLayout))
