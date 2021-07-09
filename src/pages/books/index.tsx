import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'

import useAuth from 'hooks/useAuth'
import { getClientAuth } from 'services/api'
import { APP_URLS, AUTH_COOKIE } from 'utils/constants'
import { IBookResponse, IBooks } from 'types/Book'

interface Props {
  books: IBooks[]
  totalPages: number
}

export default function Books({ books, totalPages }: Props) {
  const { user, handleSignOut } = useAuth()

  return (
    <div>
      <Head>
        <title>Ioasys Books | Books</title>
      </Head>
      <header>
        hello {user?.name} <button onClick={handleSignOut}>logout</button>
      </header>
      <h1>
        {books.map(({ id, title }) => (
          <p key={id}>{title}</p>
        ))}
      </h1>
    </div>
  )
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async ctx => {
  const { [AUTH_COOKIE]: token } = parseCookies(ctx)
  const apiClient = getClientAuth(ctx)

  if (!token) {
    return {
      redirect: {
        destination: APP_URLS.LOGIN,
        permanent: false
      }
    }
  }

  try {
    const res: IBookResponse = await apiClient
      .get('/books?page=1&amount=12')
      .then(({ data }) => data)

    const books = res.data.map(book => ({
      ...book,
      authors: book.authors.join(', ')
    }))

    return {
      props: {
        books,
        totalPages: Number(res.totalItems)
      }
    }
  } catch (error) {
    if (error.response.status === 401) {
      return {
        redirect: {
          destination: `${APP_URLS.LOGIN}?sessionExpired=true`,
          permantent: false
        }
      }
    }

    return {
      redirect: {
        destination: `${APP_URLS.LOGIN}?logout=true`,
        permantent: false
      }
    }
  }
}
