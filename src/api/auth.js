import httpRequest from '../services/httpRequest'

export const login = (formData) => httpRequest.post('/login', formData)

export const register = (formData) => httpRequest.post('/register', formData)

export const verify = (token) => httpRequest.get(`/verify/${token}`)

export const forgotPassword = (formData) => httpRequest.post('/forgot-password', formData)

export const resetPassword = (token, formData) => httpRequest.post(`/reset-password/${token}`, formData)
