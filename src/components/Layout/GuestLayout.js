import React from 'react'
import { Layout } from 'antd'

const GuestLayout = ({ children }) => (
  <Layout className="guest-layout">
    <Layout.Content>
      <h1 className="brand-name"> Demo App</h1>
      {children}
    </Layout.Content>
  </Layout>
)

export default GuestLayout
