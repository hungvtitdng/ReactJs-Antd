import * as CONST from './constants'

export function getListAction(params) {
  return {
    type: CONST.GET_LIST_REQUEST,
    params,
  }
}

export function getListSuccessAction(data) {
  return {
    type: CONST.GET_LIST_SUCCESS,
    data,
  }
}

export function getDetailAction(id, params) {
  return {
    type: CONST.GET_DETAIL_REQUEST,
    id,
    params,
  }
}

export function getDetailSuccessAction(data) {
  return {
    type: CONST.GET_DETAIL_SUCCESS,
    data,
  }
}

export function updateAction(id, data) {
  return {
    type: CONST.UPDATE_REQUEST,
    id,
    data,
  }
}

export function updateSuccessAction(data) {
  return {
    type: CONST.UPDATE_SUCCESS,
    data,
  }
}

export function handleErrorAction(error) {
  return {
    type: CONST.HANDLE_ERROR,
    error,
  }
}
