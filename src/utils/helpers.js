import history from './history'
import { PAGE_SIZE, STORAGE_KEY } from '../config/constants'

export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const setIndexTableRow = (index, page) => {
  return (page - 1) * PAGE_SIZE + index + 1
}

export const setAccessToken = (accessToken) => {
  localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, accessToken)
}

export const getAccessToken = () => {
  return localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN)
}

export const deleteStorage = () => {
  localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN)
}

export const logout = () => {
  deleteStorage()
  return history.push('/login')
}
