import Loadable from 'react-loadable'

import MainLayout from '../../components/Layout/MainLayout'
import LoadingPage from '../../pages/LoadingPage'

const DashboardPage = Loadable({
  loader: () => import('../../pages/Dashboard'),
  loading: LoadingPage,
})

const dashboardRoutes = [
  {
    path: '/',
    exact: true,
    requiredAuth: true,
    component: DashboardPage,
    layout: MainLayout,
  },
]

export default dashboardRoutes
