import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { hasAuth, checkPermission } from './permission'
import UnauthorizedPage from '../pages/Error/Unauthorized'

import { user } from '../store/modules/auth/selectors'

const PrivateRoute = ({ userInfo, component: Component, ...rest }) => {
  if (hasAuth(userInfo)) {
    if (checkPermission()) {
      return <Route {...rest} render={() => <Component />} />
    }

    return <Route {...rest} render={() => <UnauthorizedPage />} />
  }

  return <Route {...rest} render={(props) => <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />
}

const mapStateToProps = createStructuredSelector({
  userInfo: user(),
})

export default memo(connect(mapStateToProps)(PrivateRoute))
