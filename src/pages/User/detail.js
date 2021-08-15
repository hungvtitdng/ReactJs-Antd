import React from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../components/Title'

const UserDetailPage = () => {
  const params = useParams()
  console.log(params.id)

  return (
    <>
      <Title name="User Detail" />
      <h1>User detail</h1>
    </>
  )
}

export default UserDetailPage
