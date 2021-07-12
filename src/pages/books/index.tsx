import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import useAuth from 'hooks/useAuth'
import useBook from 'hooks/useBook'

import { getClientAuth } from 'services/api'
import { APP_URLS, AUTH_COOKIE } from 'utils/constants'
import { IBookResponse, IBook } from 'types/Book'

import { formatPage } from 'utils/formatters'

import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import Header from 'components/common/Header'
import SEO from 'components/common/SEO'
import BookModal from 'components/book/BookModal'
import BookGrid from 'components/book/BookGrid'

import { Container, Content, Footer } from 'styles/pages/Books'

interface Props {
  books: IBook[]
  totalPages: number
}

export default function Books({ books, totalPages }: Props) {
  const { user, handleSignOut } = useAuth()
  const { page, prevPage, nextPage, selectedBook } = useBook()

  return (
    <>
      <SEO
        title="Ioasys Books | Books"
        description="Veja nosso catálogo de livros!"
      />

      {selectedBook && <BookModal />}

      <Container>
        <Content>
          <Header user={user} onSignOut={handleSignOut} />

          <BookGrid books={books} />

          <Footer>
            <Button onClick={prevPage} disabled={page === 1}>
              <Icon name="chevron-left" />
            </Button>
            <span>
              Página <span>{page}</span> de <span>{totalPages}</span>
            </span>
            <Button onClick={nextPage}>
              <Icon name="chevron-right" />
            </Button>
          </Footer>
        </Content>
      </Container>
    </>
  )
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async ctx => {
  const { [AUTH_COOKIE]: token } = parseCookies(ctx)
  const apiClient = getClientAuth(ctx)

  const page = formatPage(ctx.query.page)
  const bookAmount = 12

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
      .get(`/books?page=${page}&amount=${bookAmount}`)
      .then(({ data }) => data)

    const books = res.data.map(book => ({
      ...book,
      authors: book.authors.join(', ')
    }))

    return {
      props: {
        books,
        totalPages: Math.ceil(res.totalItems)
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
