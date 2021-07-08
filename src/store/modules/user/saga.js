import { call, put, takeEvery } from 'redux-saga/effects'
import * as CONST from './constants'
import { list } from '../../../api/user'
import {
  getListSuccessAction,

  handleErrorAction,
} from './actions'

export function* getListSaGa(payload) {
  try {
    const res = yield call(list, payload.params)

    yield put(getListSuccessAction(res.data))
  } catch (error) {
    yield put(handleErrorAction(error))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* carData() {
  yield takeEvery(CONST.GET_LIST_REQUEST, getListSaGa)
}
