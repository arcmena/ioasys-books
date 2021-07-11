import { useRouter } from 'next/router'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { IBook } from 'types/Book'
import { APP_URLS } from 'utils/constants'
import { formatPage } from 'utils/formatters'

interface IBookContext {
  page: number
  selectedBook: IBook | null
  prevPage: () => void
  nextPage: () => void
  openBook: (book: IBook) => void
  closeBook: () => void
}

const BookContext = createContext({} as IBookContext)

interface IBookProvider {
  children: ReactNode
}

export function BookProvider({ children }: IBookProvider) {
  const router = useRouter()

  const [page, setPage] = useState<number>(formatPage(router.query.page))
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null)

  useEffect(() => {
    const route = router.pathname

    if (route !== APP_URLS.BOOKS) {
      return
    }

    //TODO: loading

    router.push(`${route}?page=${page}`, undefined, { shallow: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const prevPage = () => setPage(page - 1)

  const nextPage = () => setPage(page + 1)

  const openBook = (book: IBook) => {
    setSelectedBook(book)
    console.log(book)
  }

  const closeBook = () => {
    setSelectedBook(null)
  }

  const providerValue = {
    page,
    selectedBook,
    prevPage,
    nextPage,
    openBook,
    closeBook
  }

  return (
    <BookContext.Provider value={providerValue}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContext
