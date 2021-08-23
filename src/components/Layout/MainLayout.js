import React, { useState, memo, useEffect } from 'react'
import { Layout } from 'antd'
import HeaderMain from './HeaderMain'
import SliderBar from './SliderBar'

const { Content, Sider } = Layout

const MainLayout = ({ children }) => {
  console.log('Main layout rendering')

  const [isCollapsed, setCollapsed] = useState(true)

  useEffect(() => {
    console.log('Runing one times.')
  }, [])

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={isCollapsed} theme="light" className="slider-bar">
        <div className="flex h-screen flex-col">
          <div className="header-logo flex justify-center items-center flex-0-0-auto hide-20">
            <span className={`whitespace-nowrap ${isCollapsed ? 'fadeOut' : 'fadeIn'}`}>Hung Vo</span>
            <span className={`m-hide ${isCollapsed ? 'fadeIn' : 'fadeOut'}`}>HV</span>
          </div>

          <SliderBar />
        </div>
      </Sider>
      <Layout className="flex h-screen">
        <HeaderMain isCollapsed={isCollapsed} onCollapse={() => setCollapsed(!isCollapsed)} />
        <Content className="overflow-y-auto">
          <div className="m-4 pb-4 pr-4 pl-4 bg-white">
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default memo(MainLayout)
