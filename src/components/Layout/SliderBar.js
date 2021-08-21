import React, { memo } from 'react'
import { Menu } from 'antd'
import { withTranslation } from 'react-i18next'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkPermission } from '../../routes/permission'
import Icon from '../Icon'
import { user } from '../../store/modules/auth/selectors'

const SliderBarItems = ({ authUser, t }) => {
  const prePath = `/${window.location.pathname.split('/')[1]}`

  const menuItems = [
    {
      path: '/',
      title: t('dashboard'),
      iconName: 'mdiSpeedometer',
    },
    {
      path: '/users',
      title: t('accounts'),
      iconName: 'mdiAccountGroupOutline',
    },
  ]

  return (
    <Menu className="overflow-y-auto hidden-scrollbar border-r-0" mode="inline" defaultSelectedKeys={[prePath]}>
      {menuItems.map((m) => (
        checkPermission(m.path, authUser?.permissions) ? (
          <Menu.Item key={m.path} icon={<Icon name={m.iconName} />}>
            <Link to={m.path}>{m.title}</Link>
          </Menu.Item>
        ) : null
      ))}
    </Menu>
  )
}

const mapStateToProps = createStructuredSelector({
  authUser: user(),
})

export default withTranslation()(
  memo(connect(
    mapStateToProps,
  )(SliderBarItems)),
)
