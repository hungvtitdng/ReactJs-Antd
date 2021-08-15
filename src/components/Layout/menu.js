import {
  DashboardOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { trans } from '../../i18n'

export default [
  {
    path: '/',
    title: trans('dashboard'),
    icon: DashboardOutlined,
  },
  {
    path: '/users',
    title: trans('accounts'),
    icon: TeamOutlined,
  },
]
