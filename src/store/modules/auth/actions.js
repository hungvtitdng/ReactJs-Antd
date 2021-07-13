import * as CONST from './constants'

export function setDataAction(params) {
  return {
    type: CONST.SET_DATA,
    params,
  }
}

export function loginRequestAction(data) {
  return {
    type: CONST.LOGIN_REQUEST,
    data,
  }
}

export function loginSuccessAction(data) {
  return {
    type: CONST.LOGIN_SUCCESS,
    data,
  }
}

export function registerRequestAction(data) {
  return {
    type: CONST.REGISTER_REQUEST,
    data,
  }
}

export function registerSuccessAction(data) {
  return {
    type: CONST.REGISTER_SUCCESS,
    data,
  }
}

export function verifyRequestAction(token) {
  return {
    type: CONST.VERIFY_REQUEST,
    token,
  }
}

export function verifySuccessAction(data) {
  return {
    type: CONST.VERIFY_SUCCESS,
    data,
  }
}

export function forgotPasswordRequestAction(data) {
  return {
    type: CONST.FORGOT_PASSWORD_REQUEST,
    data,
  }
}

export function forgotPasswordSuccessAction(data) {
  return {
    type: CONST.FORGOT_PASSWORD_SUCCESS,
    data,
  }
}

export function resetPasswordRequestAction(token, data) {
  return {
    type: CONST.RESET_PASSWORD_REQUEST,
    token,
    data,
  }
}

export function resetPasswordSuccessAction(data) {
  return {
    type: CONST.RESET_PASSWORD_SUCCESS,
    data,
  }
}

export function handleErrorAction(error) {
  return {
    type: CONST.HANDLE_ERROR,
    error,
  }
}
