import { useEffect } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { SubmitHandler, useForm } from 'react-hook-form'

import useAuth from 'hooks/useAuth'
import ISignIn from 'types/SignIn'
import { APP_URLS, AUTH_COOKIE } from 'utils/constants'

interface Props {
  sessionExpired: boolean
  logout: boolean
}

export default function Home({ sessionExpired, logout }: Props) {
  const { register, handleSubmit } = useForm()
  const { handleSignIn, handleSessionExpiration, handleSignOut } = useAuth()

  useEffect(() => {
    if (logout) return handleSignOut()

    handleSessionExpiration(sessionExpired)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit: SubmitHandler<ISignIn> = async data => {
    await handleSignIn(data)
  }

  return (
    <>
      <Head>
        <title>Ioasys Books | Login</title>
      </Head>
      <div>
        <h1>ioasys</h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Seu email"
              {...register('email', { required: true })}
            />
            <input
              type="password"
              placeholder="Sua senha"
              {...register('password', { required: true })}
            />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async ctx => {
  const { [AUTH_COOKIE]: token } = parseCookies(ctx)

  if (token && !ctx.query.sessionExpired && !ctx.query.logout) {
    return {
      redirect: {
        destination: APP_URLS.BOOKS,
        permantent: false
      }
    }
  }

  return {
    props: {
      sessionExpired: !!ctx.query.sessionExpired,
      logout: !!ctx.query.logout
    }
  }
}
