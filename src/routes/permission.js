import { deleteStorage, getAccessToken } from '../utils/helpers'

export const checkPermission = (permission) => {
  return !!permission
}

/**
 * Check has token on local store
 */
export const hasAuth = () => {
  const token = getAccessToken()
  if (token) {
    return true
  }

  deleteStorage()
  return false
}
