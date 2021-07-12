export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL

export const APP_URLS = {
  LOGIN: '/',
  BOOKS: '/books'
}

export const SIZES = {
  XS: 320,
  SM: 425,
  MD: 768,
  LG: 1024,
  XL: 1280
}

export const AUTH_COOKIE = 'ioasys.token'

export const REFRESH_COOKIE = 'ioasys.refresh_token'

export const USER_COOKIE = 'ioasys.user'

export const MAX_AGE_COOKIE = 60 * 60 * 1 // 1 hour
