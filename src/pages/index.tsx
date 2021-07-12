import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { SubmitHandler, useForm } from 'react-hook-form'

import useAuth from 'hooks/useAuth'
import ISignIn from 'types/SignIn'
import { APP_URLS, AUTH_COOKIE } from 'utils/constants'

import SEO from 'components/common/SEO'
import Logo from 'components/common/Logo'
import Input from 'components/ui/Input'
import Tooltip from 'components/ui/Tooltip'
import Button from 'components/ui/Button'

import { Container } from 'styles/pages/Login'

interface Props {
  sessionExpired: boolean
  logout: boolean
}

export default function Login({ sessionExpired, logout }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { handleSignIn, handleSessionExpiration, handleSignOut, loading } =
    useAuth()

  const [authError, setAuthError] = useState<string>('')

  useEffect(() => {
    if (logout) return handleSignOut()

    handleSessionExpiration(sessionExpired)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit: SubmitHandler<ISignIn> = async data => {
    const error = await handleSignIn(data)

    if (error) setAuthError(String(error))
  }

  return (
    <>
      <SEO
        title="Ioasys Books | Login"
        description="Faça login e veja todos os livros!"
      />
      <Container>
        <div>
          <Logo variant="white" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              type="email"
              {...register('email', { required: true })}
            />
            <Input
              label="Senha"
              type="password"
              {...register('password', { required: true })}
            >
              <Button type="submit" loading={loading} disabled={loading}>
                Entrar
              </Button>
            </Input>
            {errors.email || errors.password ? (
              <Tooltip>Email e senha obrigatórios</Tooltip>
            ) : (
              authError && <Tooltip>{authError}</Tooltip>
            )}
          </form>
        </div>
      </Container>
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
