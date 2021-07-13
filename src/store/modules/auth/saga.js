import { call, put, takeEvery } from 'redux-saga/effects'
import { notification } from 'antd'
import history from '../../../utils/history'
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  VERIFY_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
} from './constants'
import { forgotPassword, login, register, resetPassword, verify } from '../../../api/auth'
import {
  loginSuccessAction,
  registerSuccessAction,
  verifySuccessAction,
  forgotPasswordSuccessAction,
  resetPasswordSuccessAction,

  handleErrorAction,
} from './actions'

export function* loginSaGa(payload) {
  try {
    const res = yield call(login, payload.data)

    yield put(loginSuccessAction(res.data))
    notification.success({ message: 'Mã xác thực được gởi tới email của bạn.', placement: 'bottomLeft' })
  } catch (error) {
    yield put(handleErrorAction(error))
  }
}

export function* registerSaGa(payload) {
  try {
    const res = yield call(register, payload.data)

    notification.success({ message: 'Register successful, Please check email to active.', placement: 'bottomLeft' })
    history.push('/login')
    yield put(registerSuccessAction(res.data))
  } catch (error) {
    yield put(handleErrorAction(error))
  }
}

export function* verifySaGa(payload) {
  try {
    const res = yield call(verify, payload.token)

    yield put(verifySuccessAction(res.data))
  } catch (error) {
    yield put(handleErrorAction(error))
  }
}

export function* forgotPasswordSaGa(payload) {
  try {
    const res = yield call(forgotPassword, payload.data)

    yield put(forgotPasswordSuccessAction(res.data))
    notification.success({ message: 'Vui lòng kiểm tra Email để lấy lại mật khẩu!', placement: 'bottomLeft' })
  } catch (error) {
    yield put(handleErrorAction(error))
  }
}

export function* resetPasswordSaGa(payload) {
  try {
    const res = yield call(resetPassword, payload.token, payload.data)

    yield put(resetPasswordSuccessAction(res.data))
    notification.success({ message: 'Lấy lại mật khẩu thành công!', placement: 'bottomLeft' })
    history.push('/login')
  } catch (error) {
    yield put(handleErrorAction(error))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* authData() {
  yield takeEvery(RESET_PASSWORD_REQUEST, resetPasswordSaGa)
  yield takeEvery(FORGOT_PASSWORD_REQUEST, forgotPasswordSaGa)
  yield takeEvery(VERIFY_REQUEST, verifySaGa)
  yield takeEvery(REGISTER_REQUEST, registerSaGa)
  yield takeEvery(LOGIN_REQUEST, loginSaGa)
}
