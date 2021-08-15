import { notification } from 'antd'
import axios from 'axios'
import { REQUEST_HEADER } from '../config/constants'
import { getAccessToken } from '../utils/helpers'
import { checkSubPaths, errorException } from './handler'

const ignorePaths = [
  '/login',
  '/tfa',
  '/register',
  '/forgot-password',
]

const ignoreSubPaths = ['/reset-password/']

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: REQUEST_HEADER,
})

httpRequest.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => Promise.reject(error),
)

httpRequest.interceptors.response.use(
  (response) => {
    if (!ignorePaths.includes(response.config.url) && !checkSubPaths(response.config.url, ignoreSubPaths)) {
      switch (response.config.method) {
        case 'put':
        case 'patch':
          notification.success({ message: 'Update successful!' })
          break

        case 'post':
          notification.success({ message: 'Save successful!' })
          break

        case 'delete':
          notification.success({ message: 'Delete successful!' })
          break
      }
    }

    return response.data
  },
  (error) => errorException(error),
)

export default httpRequest
