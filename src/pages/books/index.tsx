import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import useAuth from 'hooks/useAuth'

import { APP_URLS, AUTH_COOKIE } from 'utils/constants'

export default function Books() {
  const { user } = useAuth()

  return (
    <div>
      <h1>books</h1>
      <p>hello {user?.name}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { [AUTH_COOKIE]: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: APP_URLS.LOGIN,
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
