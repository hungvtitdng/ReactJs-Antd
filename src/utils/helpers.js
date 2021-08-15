import history from './history'
import { ACCESS_TOKEN, PAGE_SIZE } from '../config/constants'

export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const setIndexTableRow = (index, page) => {
  return (page - 1) * PAGE_SIZE + index + 1
}

export const setToken = (accessToken) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken)
}

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN)
}

export const deleteStorage = () => {
  localStorage.removeItem(ACCESS_TOKEN)
}

export const logout = () => {
  deleteStorage()
  return history.push('/login')
}
