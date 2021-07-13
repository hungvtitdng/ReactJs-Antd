import PageNotFound from '../pages/Error/NotFound'
import GuestLayout from '../components/Layout/GuestLayout'
import MainLayout from '../components/Layout/MainLayout'

/**
 * Get List Route Modules.
 *
 * @returns {[]}
 */
const publicRoutes = require.context('./public', true, /\.js$/)
const privateRoutes = require.context('./private', true, /\.js$/)

const parseModules = (context) => {
  const routes = []
  const paths = []

  context.keys().forEach((fileName) => {
    const object = context(fileName).default
    routes.push(...object)
    paths.push(...object.map((o) => o.path))
  })

  return {
    routes,
    paths,
  }
}

const routes = [
  {
    path: parseModules(publicRoutes).paths,
    exact: true,
    requiredAuth: false,
    restricted: true,
    component: GuestLayout,
    routes: parseModules(publicRoutes).routes,
  },
  {
    path: parseModules(privateRoutes).paths,
    exact: true,
    requiredAuth: true,
    restricted: false,
    component: MainLayout,
    routes: parseModules(privateRoutes).routes,
  },
  {
    path: '*',
    component: PageNotFound,
  },
]

export default routes
