import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

import { refreshToken, signIn } from 'services/auth'

import ISignIn from 'types/SignIn'
import User from 'types/User'

import {
  APP_URLS,
  AUTH_COOKIE,
  MAX_AGE_COOKIE,
  REFRESH_COOKIE,
  USER_COOKIE
} from 'utils/constants'

interface IAuthContext {
  user: User | null
  loading: boolean
  handleSignIn: (data: ISignIn) => Promise<void | string>
  handleSignOut: () => void
  handleSessionExpiration: (state: boolean) => void
}

const AuthContext = createContext({} as IAuthContext)

interface IAuthProvider {
  children: ReactNode
}

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<User | null>(null)
  const [sessionExpired, setSessionExpired] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const { [AUTH_COOKIE]: token, [USER_COOKIE]: user } = parseCookies()

    if (token && user) setUser(JSON.parse(user))
  }, [])

  const handleSessionExpired = async () => {
    const { [REFRESH_COOKIE]: storedRefreshToken } = parseCookies()
    const { error } = await refreshToken(storedRefreshToken)

    if (!error) Router.push(APP_URLS.BOOKS)
  }

  useEffect(() => {
    if (sessionExpired) handleSessionExpired()
  }, [sessionExpired])

  const handleSignIn = async ({
    email,
    password
  }: ISignIn): Promise<void | string> => {
    setLoading(true)
    const { data, error } = await signIn({ email, password })

    if (data) {
      setCookie(undefined, AUTH_COOKIE, data.headers.authorization, {
        maxAge: MAX_AGE_COOKIE
      })

      setCookie(undefined, REFRESH_COOKIE, data.headers['refresh-token'], {
        maxAge: MAX_AGE_COOKIE
      })

      setCookie(undefined, USER_COOKIE, JSON.stringify(data.data), {
        maxAge: MAX_AGE_COOKIE
      })

      setUser(data.data)
      setLoading(false)

      Router.push(APP_URLS.BOOKS)
    } else {
      //TODO: handle errors
      setLoading(false)
      console.error(error)
      return error
    }
  }

  const handleSignOut = async () => {
    destroyCookie(undefined, AUTH_COOKIE)
    destroyCookie(undefined, REFRESH_COOKIE)
    destroyCookie(undefined, USER_COOKIE)

    Router.push(APP_URLS.LOGIN)
  }

  const handleSessionExpiration = (state: boolean) => setSessionExpired(state)

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignIn,
        handleSignOut,
        handleSessionExpiration,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
