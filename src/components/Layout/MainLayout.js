import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import {
  DashboardOutlined,
  UserOutlined,
} from '@ant-design/icons'
import HeaderMain from './HeaderMain'

const { Content, Sider } = Layout

const MainLayout = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(true)

  const prePath = `/${window.location.pathname.split('/')[1]}`

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className="slider-left" trigger={null} collapsible collapsed={isCollapsed}>
        <Menu className="menu-left" theme="dark" mode="inline" defaultSelectedKeys={[prePath]}>
          <Menu.Item key="/" icon={<DashboardOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/users" icon={<UserOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
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

export default MainLayout
