import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectAuth = (state) => state.auth || initialState

export const user = () => createSelector(
  selectAuth,
  (state) => state.user,
)

export const submitting = () => createSelector(
  selectAuth,
  (state) => state.submitting,
)

export const loading = () => createSelector(
  selectAuth,
  (state) => state.loading,
)

export const success = () => createSelector(
  selectAuth,
  (state) => state.success,
)

export const error = () => createSelector(
  selectAuth,
  (state) => state.error,
)
