import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectUser = (state) => state.user || initialState

export const loading = () =>
  createSelector(
    selectUser,
    (state) => state.loading,
  )

export const list = () =>
  createSelector(
    selectUser,
    (state) => state.list,
  )

export const submitting = () =>
  createSelector(
    selectUser,
    (state) => state.submitting,
  )

export const detail = () =>
  createSelector(
    selectUser,
    (state) => state.detail,
  )
