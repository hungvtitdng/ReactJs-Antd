import React from 'react'
import { useParams } from 'react-router-dom'
import TitleApp from '../../components/TitleApp'

const UserDetailPage = () => {
  const params = useParams()
  console.log(params.id)

  return (
    <>
      <TitleApp name="User Detail" />
      <h1>User detail</h1>
    </>
  )
}

export default UserDetailPage
