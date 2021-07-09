import axios, { AxiosInstance } from 'axios'
import { parseCookies } from 'nookies'

import { AUTH_COOKIE, BASE_API_URL } from 'utils/constants'

export const getClientAuth = (ctx?: any): AxiosInstance => {
  const { [AUTH_COOKIE]: token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: BASE_API_URL
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}

export const api = getClientAuth()
