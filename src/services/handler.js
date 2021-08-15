import { notification } from 'antd'
import _ from 'lodash'

const convertMessageError = (messages) => {
  if (_.isString(messages)) {
    return messages
  }

  let mes = ''
  _.forOwn(messages, (message) => {
    mes = message[0]
    return false
  })

  return mes
}

const handleError = (error) => {
  if (error) {
    notification.error({ message: convertMessageError(error.message), placement: 'bottomLeft' })
  } else {
    notification.error({ message: 'No response!', placement: 'bottomLeft' })
  }
}

export const errorException = (error) => {
  const statusCode = error.response?.status

  switch (statusCode) {
    case 401:
      // TODO: logout
      break

    case 403:
      notification.error({ message: '403 Forbidden' })
      break

    case 404:
      notification.error({ message: '404 Not Found' })
      break

    case 422:
      handleError(error.response?.data)
      break

    case 500:
      notification.error({ message: '500 Internal Server Error' })
      break

    default:
      notification.error({ message: 'Something is wrong' })
      break
  }

  return Promise.reject(error.response?.data)
}

export const checkSubPaths = (url, subPaths) => {
  let hasSubPath = false

  subPaths.forEach((sp) => {
    if (url.indexOf(sp) === 0) {
      hasSubPath = true
      return false
    }
  })

  return hasSubPath
}
