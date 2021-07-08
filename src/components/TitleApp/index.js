import React from 'react'
import { Helmet } from 'react-helmet'

const TitleApp = ({ name }) => (
  <Helmet>
    <title>{name} - {process.env.REACT_APP_NAME}</title>
  </Helmet>
)

export default TitleApp
