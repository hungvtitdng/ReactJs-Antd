import LoginPage from '../../pages/Auth/login'
import RegisterPage from '../../pages/Auth/register'
import ForgotPasswordPage from '../../pages/Auth/forgot-password'
import ResetPasswordPage from '../../pages/Auth/reset-password'

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
  {
    path: '/forgot-password',
    exact: true,
    restricted: true,
    component: ForgotPasswordPage,
  },
  {
    path: '/reset-password',
    exact: true,
    restricted: true,
    component: ResetPasswordPage,
  },
]

export default authRoutes
