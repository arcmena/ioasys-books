import ISignIn from 'types/SignIn'

import { api } from './api'

interface IResponse {
  data: any
  error: any
}

export const signIn = async ({
  email,
  password
}: ISignIn): Promise<IResponse> => {
  const response: IResponse = {
    data: undefined,
    error: undefined
  }

  try {
    const { data, headers } = await api.post('/auth/sign-in', {
      email,
      password
    })

    api.defaults.headers['Authorization'] = `Bearer ${headers.authorization}`

    response.data = { data, headers }
  } catch (error) {
    response.error = 'Ops, algum erro aconteceu'

    if (error.response) {
      response.error = error.response.data.errors.message
    }
  }

  return response
}

export const refreshToken = async (
  storedToken: string,
  storedRefreshToken: string
): Promise<IResponse> => {
  const response: IResponse = {
    data: undefined,
    error: undefined
  }

  try {
    api.defaults.headers['Authorization'] = `Bearer ${storedToken}`

    const { data, headers } = await api.post('/auth/refresh-token', {
      refreshToken: storedRefreshToken
    })

    response.data = { data, headers }
  } catch (error) {
    response.error = 'Ops, algum erro aconteceu'

    if (error.response) {
      response.error = error.response.data.errors.message
    }
  }

  return response
}
