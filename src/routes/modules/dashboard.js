import MainLayout from '../../components/Layout/MainLayout'
import Dashboard from '../../pages/Dashboard'

const authRoutes = [
  {
    path: '/',
    exact: true,
    restricted: false,
    component: Dashboard,
    layout: MainLayout,
  },
]

export default authRoutes
