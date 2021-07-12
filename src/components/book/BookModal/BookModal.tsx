import Image from 'next/image'

import useBook from 'hooks/useBook'

import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'

import { Container, Content, ModalBody } from './styles'
import useResize from 'hooks/useResize'
import { useEffect } from 'react'
import { SIZES } from 'utils/constants'

export default function BookModal() {
  const { selectedBook, closeBook } = useBook()
  const { width } = useResize()

  return (
    <Container>
      <Button onClick={closeBook}>
        <Icon name="close" />
      </Button>
      <Content>
        <ModalBody>
          <div className="book__image">
            <Image
              // @ts-ignore
              src={selectedBook?.imageUrl || '/books/book-placeholder.png'}
              alt={selectedBook?.title}
              width={width <= SIZES.MD ? 240 : 350}
              height={width <= SIZES.MD ? 350 : 512}
              blurDataURL={
                selectedBook?.imageUrl || '/books/book-placeholder.png'
              }
              placeholder="blur"
            />
          </div>
          <div className="book__info">
            <h1>{selectedBook?.title}</h1>
            <h3>{selectedBook?.authors}</h3>

            <h2>INFORMAÇÕES</h2>
            <div className="book__description">
              <div>
                <span>Páginas</span>
                <span>{selectedBook?.pageCount}</span>
              </div>
              <div>
                <span>Editora</span>
                <span>{selectedBook?.publisher}</span>
              </div>
              <div>
                <span>Publicação</span>
                <span>{selectedBook?.published}</span>
              </div>
              <div>
                <span>Idioma</span>
                <span>{selectedBook?.language}</span>
              </div>
              <div>
                <span>Título original</span>
                <span>{selectedBook?.title}</span>
              </div>
              <div>
                <span>ISBN-10</span>
                <span>{selectedBook?.isbn10}</span>
              </div>
              <div>
                <span>ISBN-13</span>
                <span>{selectedBook?.isbn13}</span>
              </div>
            </div>

            <h2>RESENHA DA EDITORA</h2>
            <div className="book__review">
              <p>
                <Icon name="quotes" /> {selectedBook?.description}
              </p>
            </div>
          </div>
        </ModalBody>
      </Content>
    </Container>
  )
}
