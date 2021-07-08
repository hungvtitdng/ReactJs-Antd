import axios from 'axios'
import { REQUEST_HEADER } from '../config/constants'
import { errorException } from './handler'

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: REQUEST_HEADER,
})

httpRequest.interceptors.request.use(
  (config) => {
    // TODO: get access Token and pass here
    return config
  },
  (error) => Promise.reject(error),
)

httpRequest.interceptors.response.use(
  (response) => response.data,
  (error) => errorException(error),
)

export default httpRequest
