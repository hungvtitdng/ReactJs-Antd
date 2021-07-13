import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  LoginOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons'

export default [
  {
    path: '/',
    title: 'Dashboard',
    icon: DashboardOutlined,
  },
  {
    path: '/users',
    title: 'Account',
    icon: TeamOutlined,
  },
  {
    path: '/users/123456',
    title: 'Account Detail',
    icon: UserOutlined,
  },
  // Just for test restrict path
  {
    path: '/login',
    title: 'Login',
    icon: LoginOutlined,
  },
  {
    path: '/register',
    title: 'Register',
    icon: UserSwitchOutlined,
  },
]
