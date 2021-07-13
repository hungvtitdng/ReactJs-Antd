import React from 'react'
import { Layout } from 'antd'

const Footer = () => <Layout.Footer className="footer">{process.env.REACT_APP_NAME}</Layout.Footer>

export default Footer
