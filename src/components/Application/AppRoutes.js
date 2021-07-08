import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'

/**
 * Begin Redux
 */

const AppRoutes = ({ routes }) => {
  const renderRoute = (route) => {
    const RouteComponent = route.component

    if (route.layout) {
      const LayoutComponent = route.layout

      return (
        <LayoutComponent>
          <RouteComponent />
        </LayoutComponent>
      )
    }

    return <RouteComponent />
  }

  return (
    <Switch>
      {routes.map((route, key) => (
        <Route
          key={key}
          path={route.path}
          exact={route.exact}
          render={() => {
            if (route.requiredAuth) {
              return <Redirect to="/login" />
            }

            if (route.restricted) {
              return <Redirect to="/" />
            }

            return renderRoute(route)
          }}
        />
      ))}
    </Switch>
  )
}

export default withRouter(AppRoutes)
