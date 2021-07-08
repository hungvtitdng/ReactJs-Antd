import React, { useEffect } from 'react'
import { Table } from 'antd'

/**
 * Begin Redux
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import TitleApp from '../../components/TitleApp'
import { useInjectReducer } from '../../store/injectReducer'
import { useInjectSaga } from '../../store/injectSaga'
import saga from '../../store/modules/user/saga'
import reducer from '../../store/modules/user/reducer'
import * as selectors from '../../store/modules/user/selectors'
import * as userActions from '../../store/modules/user/actions'
/**
 * End Redux
 */

const key = 'user'

const UserPage = ({ userActionsProps, list, loading }) => {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  useEffect(() => {
    userActionsProps.getListAction()
  }, [userActionsProps])

  const columns = [
    {
      title: '#',
      width: 50,
      render: (value, row, index) => index + 1,
    },
    {
      title: 'Tên',
      dataIndex: 'firstname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ]

  return (
    <>
      <TitleApp name="User list" />
      <div className="header-content">
        <h2 className="header-title">User list</h2>
      </div>
      <Table
        rowKey="id"
        className="table-custome-row"
        columns={columns}
        dataSource={list && list.items}
        pagination={{
          current: list && list.paginations.current_page,
          pageSize: list && list.paginations.per_page,
          total: list && list.paginations.total,
          position: ['bottomLeft'],
          showSizeChanger: false,
          onChange: (page) => userActionsProps.getListAction({ page }),
        }}
        loading={loading}
      />
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  list: selectors.list(),
  loading: selectors.loading(),
})

const mapDispatchToProps = (dispatch) => ({
  userActionsProps: bindActionCreators(userActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage)
