import React from 'react'
import { Form } from 'antd'
import Title from '../../components/Title'
import Flag from '../../components/Layout/flags'

const WrapAuth = ({ children, title, onFinish, widthDefault, ...props }) => (
  <>
    <Title name={title} />
    <div className={`shadown-full mt-10%vh bg-white p-12 ${widthDefault ?? 'w-96'}`}>
      <Flag hasText className="absolute top-2 right-2" textClass="color-white" />
      <h1 className="text-center mb-6 text-3xl">{title}</h1>

      <Form {...props} onFinish={onFinish}>
        {children}
      </Form>
    </div>
  </>
)

export default WrapAuth
