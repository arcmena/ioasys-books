import useBook from 'hooks/useBook'
import { IBook } from 'types/Book'

import BookCard from '../BookCard'

import { Container } from './styles'

interface IBookGrid {
  books: IBook[]
}

export default function BookGrid({ books }: IBookGrid) {
  const { openBook } = useBook()

  return (
    <Container>
      {books.map(book => (
        <BookCard key={book.id} book={book} onClick={() => openBook(book)} />
      ))}
    </Container>
  )
}
