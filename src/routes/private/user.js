import Loadable from 'react-loadable'
import LoadingPage from '../../pages/LoadingPage'
import MainLayout from '../../components/Layout/MainLayout'

const UserPage = Loadable({
  loader: () => import('../../pages/User'),
  loading: LoadingPage,
})
const UserDetailPage = Loadable({
  loader: () => import('../../pages/User/detail'),
  loading: LoadingPage,
})

const ProfilePage = Loadable({
  loader: () => import('../../pages/Profile'),
  loading: LoadingPage,
})

const userRoutes = [
  {
    path: '/users',
    exact: true,
    requiredAuth: true,
    component: UserPage,
    layout: MainLayout,
  },
  {
    path: '/users/:id',
    exact: true,
    requiredAuth: true,
    component: UserDetailPage,
    layout: MainLayout,
  },
  {
    path: '/profiles',
    exact: true,
    requiredAuth: true,
    component: ProfilePage,
    layout: MainLayout,
  },
]

export default userRoutes
