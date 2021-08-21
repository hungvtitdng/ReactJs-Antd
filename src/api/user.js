import httpRequest from '../services/httpRequest'

const path = '/users'

export const list = (params) => {
  return httpRequest.get(path, { params })
}

export const detail = (id, params) => {
  return httpRequest.get(`${path}/${id}`, { params })
}
