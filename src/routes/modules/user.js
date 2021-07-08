import Loadable from 'react-loadable'
import LoadingPage from '../../pages/LoadingPage'
import MainLayout from '../../components/Layout/MainLayout'

const UserPage = Loadable({
  loader: () => import('../../pages/User'),
  loading: LoadingPage,
})

const userRoutes = [
  {
    path: '/users',
    exact: true,
    requiredAuth: false,
    component: UserPage,
    layout: MainLayout,
  },
]

export default userRoutes
