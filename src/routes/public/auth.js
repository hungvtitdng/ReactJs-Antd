import LoginPage from '../../pages/Login'
import RegisterPage from '../../pages/Register'

const authRoutes = [
  {
    path: '/login',
    exact: true,
    restricted: true,
    component: LoginPage,
  },
  {
    path: '/register',
    exact: true,
    restricted: true,
    component: RegisterPage,
  },
]

export default authRoutes
