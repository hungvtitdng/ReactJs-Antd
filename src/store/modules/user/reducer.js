import produce from 'immer'
import * as CONST from './constants'

export const initialState = {
  loading: false,
  submitting: false,
  list: null,
  detail: null,
}

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CONST.GET_LIST_REQUEST:
        draft.loading = true
        break

      case CONST.GET_LIST_SUCCESS:
        draft.list = action.data
        draft.loading = false
        break

      case CONST.GET_DETAIL_REQUEST:
        draft.loading = true
        draft.detail = null
        break

      case CONST.GET_DETAIL_SUCCESS:
        draft.loading = false
        draft.detail = action.data
        break

      case CONST.UPDATE_REQUEST:
        draft.submitting = true
        break

      case CONST.UPDATE_SUCCESS:
        draft.submitting = false
        draft.detail = action.data
        break

      case CONST.HANDLE_ERROR:
        draft.loading = false
        draft.submitting = false
        break

      default:
        return state
    }
  })

export default reducer
