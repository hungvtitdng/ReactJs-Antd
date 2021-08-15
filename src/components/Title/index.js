import React from 'react'
import { Helmet } from 'react-helmet'

const Title = ({ name }) => {
  console.log(name)

  return (
    <Helmet>
      <title>{name} - {process.env.REACT_APP_NAME}</title>
    </Helmet>
  )
}

export default Title
