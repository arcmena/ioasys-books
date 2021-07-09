import Head from 'next/head'
import { SubmitHandler, useForm } from 'react-hook-form'

import useAuth from 'hooks/useAuth'

import ISignIn from 'types/SignIn'

export default function Home() {
  const { register, handleSubmit } = useForm()
  const { handleSignIn } = useAuth()

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
