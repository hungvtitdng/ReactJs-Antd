import { PageHeader } from 'antd'
import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Title from '../../components/Title'
import BtnCreate from '../../components/Form/btnCreate'
import TableComponent from '../../components/Table'
import Actions from '../../components/Form/actions'
import { trans } from '../../i18n'

import { useInjectReducer } from '../../store/injectReducer'
import { useInjectSaga } from '../../store/injectSaga'
import saga from '../../store/modules/user/saga'
import reducer from '../../store/modules/user/reducer'
import * as selectors from '../../store/modules/user/selectors'
import * as userActions from '../../store/modules/user/actions'

const key = 'user'
const UserPage = ({ userActionsProp, list, loading }) => {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  useEffect(() => {
    userActionsProp.getListAction()
  }, [])

  const columns = [
    {
      title: trans('attributes.username'),
      dataIndex: 'username',
    },
    {
      title: trans('attributes.name'),
      dataIndex: 'name',
    },
    {
      title: trans('attributes.email'),
      dataIndex: 'email',
    },
    {
      title: trans('attributes.phone'),
      dataIndex: 'phone',
    },
    {
      title: trans('attributes.address'),
      dataIndex: 'address',
      render: (value) => `${value?.street} ${value?.city}`,
    },
    {
      title: trans('attributes.website'),
      dataIndex: 'website',
    },
    {
      title: trans('actions'),
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
    <>
      <Title name="User list" />
      <PageHeader
        title={trans('user-list')}
        extra={<BtnCreate prefix="users" />}
      />

      <TableComponent
        loading={loading}
        columns={columns}
        data={list}
      />
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  list: selectors.list(),
  loading: selectors.loading(),
})

const mapDispatchToProps = (dispatch) => ({
  userActionsProp: bindActionCreators(userActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage)
