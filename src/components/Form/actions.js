import React from 'react'
import { Tooltip, Button, Modal } from 'antd'
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { trans } from '../../i18n'

const Actions = ({ editLink, onDelete }) => {
  const confirmDelete = () => {
    Modal.confirm({
      title: trans('messages.confirm-delete'),
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        onDelete()
      },
    })
  }

  return (
    <>
      <Tooltip title={trans('edit')} color="blue">
        <Link to={editLink}>
          <EditOutlined />
        </Link>
      </Tooltip>

      {!(onDelete instanceof Function) ? null : (
        <Tooltip title={trans('delete')} color="red">
          <Button
            type="link"
            onClick={confirmDelete}
          >
            <DeleteOutlined className="color-danger" />
          </Button>
        </Tooltip>
      )}
    </>
  )
}

export default Actions
