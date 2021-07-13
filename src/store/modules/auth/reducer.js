import produce from 'immer'
import _ from 'lodash'
import * as CONST from './constants'

export const initialState = {
  submitting: false,
  error: false,
  success: false,
  user: null,
  accessToken: null,
}

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CONST.SET_DATA:
        _.forEach(action.params, (k, v) => {
          draft[v] = k
        })
        break

      case CONST.LOGIN_REQUEST:
        draft.submitting = true
        break

      case CONST.LOGIN_SUCCESS:
        draft.submitting = false
        draft.isLoginForm = false
        break

      case CONST.REGISTER_REQUEST:
        draft.submitting = true
        draft.error = false
        break

      case CONST.REGISTER_SUCCESS:
        draft.data = action.data
        draft.submitting = false
        break

      case CONST.VERIFY_REQUEST:
        draft.loading = true
        draft.error = false
        break

      case CONST.VERIFY_SUCCESS:
        draft.loading = false
        draft.data = action.data
        break

      case CONST.FORGOT_PASSWORD_REQUEST:
        draft.submitting = true
        draft.error = false
        draft.success = false
        break

      case CONST.FORGOT_PASSWORD_SUCCESS:
        draft.submitting = false
        draft.success = true
        draft.data = action.data
        break

      case CONST.RESET_PASSWORD_REQUEST:
        draft.submitting = true
        draft.error = false
        draft.success = false
        break

      case CONST.RESET_PASSWORD_SUCCESS:
        draft.submitting = false
        draft.success = true
        draft.data = action.data
        break

      case CONST.HANDLE_ERROR:
        draft.error = action.error
        draft.loading = false
        draft.submitting = false
        draft.success = false
        break

      default:
        return state
    }
  })

export default loginReducer
