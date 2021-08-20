import React from 'react'
import { Form } from 'antd'
import Title from '../../components/Title'

const WrapAuth = ({ children, title, onFinish, widthDefault, ...props }) => (
  <>
    <Title name={title} />
    <div className={`shadown-full mt-10%vh bg-white p-12 ${widthDefault ?? 'w-96'}`}>
      <h1 className="text-center mb-6 text-3xl">{title}</h1>

      <Form {...props} onFinish={onFinish}>
        {children}
      </Form>
    </div>
  </>
)

export default WrapAuth
