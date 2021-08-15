import React from 'react'
import { Loading3QuartersOutlined } from '@ant-design/icons'

const Loading = ({ visible }) => (
  visible ? (
    <div className="loading-wrap">
      <div className="ant-modal-mask" />
      <div className="loading-modal">
        <div className="loading-container">
          <Loading3QuartersOutlined style={{ fontSize: 70, color: '#fa8c16' }} spin />
          <img alt="Logo" src="/assets/images/logo-orange.png" />
        </div>
      </div>
    </div>
  ) : null
)

export default Loading
