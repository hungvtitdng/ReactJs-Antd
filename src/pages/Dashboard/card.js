import React from 'react'
import { Col } from 'antd'
import Icon from '../../components/Icon'

const Card = ({ title, subTitle, iconName, value, subValue, bgClassname }) => (
  <Col xs={24} md={12} lg={6} className="mb-4">
    <div className={`${bgClassname} bg-gradient shadown-hover relative transition flex-col pointer p-4`}>
      <h1 className="color-white">{title}</h1>
      <div className="flex justify-between">
        <Icon name={iconName} size={2} />
        <div className="grid items-center fz-10 bold">{value}</div>
      </div>
      <div className="flex justify-between">
        <span>{subTitle}</span>
        <span>{subValue}</span>
      </div>
    </div>
  </Col>
)

export default Card
