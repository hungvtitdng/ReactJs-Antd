import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { hasAuth } from './permission'
import { user } from '../store/modules/auth/selectors'

const RestrictedRoute = ({ userInfo, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      hasAuth(userInfo) ? (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location },
        }}
        />
      ) : <Route {...rest} render={() => <Component />} />
    )}
  />
)

const mapStateToProps = createStructuredSelector({
  userInfo: user(),
})

export default memo(connect(mapStateToProps)(RestrictedRoute))
