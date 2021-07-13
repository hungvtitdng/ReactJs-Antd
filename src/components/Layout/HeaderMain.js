import React, { memo } from 'react'
import { Layout } from 'antd'

const { Header } = Layout

const HeaderMain = () => (
  <Header className="site-layout-background">
    <h3>HeaderMain</h3>
  </Header>
)

export default memo(HeaderMain)
