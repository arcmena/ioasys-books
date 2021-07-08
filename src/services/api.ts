import axios from 'axios'
import { parseCookies } from 'nookies'

import { AUTH_COOKIE, BASE_API_URL } from 'utils/constants'

const { [AUTH_COOKIE]: token } = parseCookies()

const api = axios.create({
  baseURL: BASE_API_URL
})

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

export default api
