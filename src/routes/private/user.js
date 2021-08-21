import Loadable from 'react-loadable'
import LoadingPage from '../../pages/LoadingPage'
import MainLayout from '../../components/Layout/MainLayout'

const UserPage = Loadable({
  loader: () => import('../../pages/User'),
  loading: LoadingPage,
})

const UserCreatePage = Loadable({
  loader: () => import('../../pages/User/create'),
  loading: LoadingPage,
})

const UserUpdatePage = Loadable({
  loader: () => import('../../pages/User/update'),
  loading: LoadingPage,
})

const ProfilePage = Loadable({
  loader: () => import('../../pages/Profile'),
  loading: LoadingPage,
})

const ChangePasswordPage = Loadable({
  loader: () => import('../../pages/Profile/change-password'),
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
    path: '/users/create',
    exact: true,
    requiredAuth: true,
    component: UserCreatePage,
    layout: MainLayout,
  },
  {
    path: '/users/update/:id',
    exact: true,
    requiredAuth: true,
    component: UserUpdatePage,
    layout: MainLayout,
  },
  {
    path: '/profiles',
    exact: true,
    requiredAuth: true,
    component: ProfilePage,
    layout: MainLayout,
  },
  {
    path: '/change-password',
    exact: true,
    requiredAuth: true,
    component: ChangePasswordPage,
    layout: MainLayout,
  },
]

export default userRoutes
