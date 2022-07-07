import { Col, Row } from 'antd'
import React from 'react'
import Title from '../Title'
import Loading from '../Modal/loading'

const Content = ({ children, className, hasHeader = true, loading, title, headerTitle, titleClassName, extra, forceTitle = false }) => (
  <div className={`bg-white pl-2 pr-2 mt-4 pb-10 ${className}`}>
    <Loading visible={loading} />
    <Title name={title} />
    {hasHeader && (
      <Row className="p-2 md-w-full">
        <Col sm={24} md={extra ? 8 : 24} className={`${forceTitle ? '' : 'md-hide'} md-w-full fz-5 bold flex items-center ${titleClassName}`}>
          {headerTitle ?? title}
        </Col>
        <Col sm={24} md={16} className="lg-flex lg-justify-end md-w-full">
          {extra}
        </Col>
      </Row>
    )}
    {children}
  </div>
)

export default Content
