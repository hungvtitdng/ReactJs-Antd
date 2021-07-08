import React, { memo } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { hasAuth } from './permission'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userInfo = true

  if (hasAuth(userInfo)) {
    return <Route {...rest} render={() => <Component />} />
  }

  return (
    <Route {...rest} render={(props) => <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />
  )
}

export default memo(PrivateRoute)
