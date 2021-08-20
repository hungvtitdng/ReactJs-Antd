import React from 'react'
import { Layout } from 'antd'

const GuestLayout = ({ children }) => (
  <Layout className="min-h-screen bg-main">
    <Layout.Content className="p-4 flex justify-center items-start min-h-screen">
      {children}
    </Layout.Content>
  </Layout>
)

export default GuestLayout
