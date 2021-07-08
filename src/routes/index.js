import PrivateRoute from './PrivateRoute'
import RestrictedRoute from './RestrictedRoute'
import PageNotFound from '../pages/Error/NotFound'

/**
 * Get List Route Modules.
 *
 * @returns {[]}
 */
const modulesRoute = () => {
  const requireModule = require.context('./modules', true, /\.js$/)
  const modules = []

  requireModule.keys().forEach((fileName) => {
    const module = requireModule(fileName).default
    modules.push(...module)
  })

  return modules
}

export {
  PrivateRoute,
  RestrictedRoute,
}

const routes = [
  ...modulesRoute(),
  { path: '/404', exact: true, component: PageNotFound },
  { path: '*', component: PageNotFound },
]

export default routes
