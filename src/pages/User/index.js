import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import BtnCreate from '../../components/Form/btnCreate'
import TableComponent from '../../components/Table'
import Actions from '../../components/Form/actions'

import { useInjectReducer } from '../../store/injectReducer'
import { useInjectSaga } from '../../store/injectSaga'
import saga from '../../store/modules/user/saga'
import reducer from '../../store/modules/user/reducer'
import * as selectors from '../../store/modules/user/selectors'
import * as userActions from '../../store/modules/user/actions'
import Content from '../../components/Layout/Content'

const key = 'user'
const UserPage = ({ t, userActionsProp, list, loading }) => {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  useEffect(() => {
    userActionsProp.getListAction()
  }, [])

  const columns = [
    {
      title: t('attributes.username'),
      dataIndex: 'username',
    },
    {
      title: t('attributes.name'),
      dataIndex: 'name',
    },
    {
      title: t('attributes.email'),
      dataIndex: 'email',
    },
    {
      title: t('attributes.phone'),
      dataIndex: 'phone',
    },
    {
      title: t('attributes.address'),
      dataIndex: 'address',
      render: (value) => `${value?.street} ${value?.city}`,
    },
    {
      title: t('attributes.website'),
      dataIndex: 'website',
    },
    {
      title: t('actions'),
      width: 150,
      render: (row) => (
        <Actions
          editLink={`/users/update/${row.id}`}
          onDelete={() => console.log('delete')}
        />
      ),
    },
  ]

  return (
    <Content
      title="User list"
      extra={<BtnCreate prefix="users" />}
    >
      <TableComponent
        loading={loading}
        columns={columns}
        data={list}
      />
    </Content>
  )
}

const mapStateToProps = createStructuredSelector({
  list: selectors.list(),
  loading: selectors.loading(),
})

const mapDispatchToProps = (dispatch) => ({
  userActionsProp: bindActionCreators(userActions, dispatch),
})

export default withTranslation()(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserPage),
)
