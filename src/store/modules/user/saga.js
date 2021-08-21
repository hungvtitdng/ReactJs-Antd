import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_DETAIL_REQUEST, GET_LIST_REQUEST } from './constants'
import { list, detail } from '../../../api/user'
import {
  getListSuccessAction,
  getDetailSuccessAction,
  handleErrorAction,
} from './actions'

export function* getListSaGa(payload) {
  try {
    const res = yield call(list, payload.params)

    yield put(getListSuccessAction(res))
  } catch (error) {
    yield put(handleErrorAction(error))
  }
}

export function* getDetailSaGa(payload) {
  try {
    const res = yield call(detail, payload.id, payload.params)

    yield put(getDetailSuccessAction(res))
  } catch (error) {
    yield put(handleErrorAction(error))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userData() {
  yield takeEvery(GET_LIST_REQUEST, getListSaGa)
  yield takeEvery(GET_DETAIL_REQUEST, getDetailSaGa)
}
