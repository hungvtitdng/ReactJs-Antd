import _ from 'lodash'

const EMAIL_REGEX = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

const isEmpty = (value) =>
  typeof value === 'undefined' || value === null || value === '' || _.trim(value) === ''

export const required = (value) => {
  return isEmpty(value) ? 'This field is required' : undefined
}

export const minLength = (min, message) => (value) => {
  return !isEmpty(value) && value.length < min
    ? message || `This field must be at least ${min} characters`
    : undefined
}

export const maxLength = (max, message) => (value) => {
  return !isEmpty(value) && value.length > max
    ? message || `This field may not be greater than ${max} characters`
    : undefined
}

export const minValue = (min, message) => (value) => {
  return !isEmpty(value) && value < min
    ? message || `This field must be ${min} or more`
    : undefined
}

export const maxValue = (max, message) => (value) => {
  return !isEmpty(value) && value > max
    ? message || `This field must be ${max} or less`
    : undefined
}

export const number = (value) => {
  return isNaN(Number(value))
    ? 'This field may only contain numeric characters.'
    : undefined
}

export const regex = (pattern, message) => (value) => {
  return !isEmpty(value) && typeof value === 'string' && !pattern.test(value)
    ? message
    : undefined
}

export const email = regex(
  EMAIL_REGEX,
  'This field format is invalid',
)

const matchPassword = (message) => (value, allValues) => {
  if (value !== allValues.password) {
    return message
  }

  return undefined
}

export const confirmPassword = matchPassword('Password confirmation does not match password.')
