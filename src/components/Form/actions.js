import React from 'react'
import { Tooltip, Button, Modal } from 'antd'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import Icon from '../Icon'

const Actions = ({ t, editLink, onDelete }) => {
  const confirmDelete = () => {
    Modal.confirm({
      title: t('messages.confirm-delete'),
      onOk: () => {
        onDelete()
      },
    })
  }

  return (
    <>
      <Tooltip title={t('edit')} color="blue">
        <Link to={editLink}>
          <Icon name="mdiPencilOutline" />
        </Link>
      </Tooltip>

      {!(onDelete instanceof Function) ? null : (
        <Tooltip title={t('delete')} color="red">
          <Button
            type="link"
            onClick={confirmDelete}
          >
            <Icon name="mdiTrashCanOutline" className="color-red" />
          </Button>
        </Tooltip>
      )}
    </>
  )
}

export default withTranslation()(Actions)
