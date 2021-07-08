import React, { memo } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { hasAuth } from './permission'

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const userInfo = true

  return (
    <Route
      {...rest}
      render={(props) => (
        hasAuth(userInfo) ? (
          <Redirect to={{
            pathname: '/dashboard',
            state: { from: props.location },
          }}
          />
        ) : <Route {...rest} render={() => <Component />} />
      )}
    />
  )
}

RestrictedRoute.propTypes = {
  location: PropTypes.object,
}

export default memo(RestrictedRoute)
