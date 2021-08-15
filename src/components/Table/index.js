import React, { useState } from 'react'
import { Table } from 'antd'
import { setIndexTableRow } from '../../utils/helpers'

const TableComponent = ({ key = 'id', data, onPageChange, ...props }) => {
  const [page, setPage] = useState(1)

  const columns = [
    {
      title: '#',
      width: 50,
      render: (value, row, index) => setIndexTableRow(index, page),
    },
    ...props.columns,
  ]

  return (
    <Table
      {...props}
      rowKey={key}
      columns={columns}
      className="overflow-x-auto min-w-full"
      dataSource={data}
      pagination={{
        onChange: (p) => {
          setPage(p)

          if (onPageChange instanceof Function) {
            onPageChange(p)
          }
        },
      }}
    />
  )
}

export default TableComponent
