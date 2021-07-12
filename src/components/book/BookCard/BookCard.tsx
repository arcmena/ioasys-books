import { MouseEventHandler } from 'react'
import Image from 'next/image'

import { IBook } from 'types/Book'

import { Container } from './styles'

interface IBookCard {
  book: IBook
  onClick: MouseEventHandler<HTMLDivElement>
}

export default function BookCar({
  book: { imageUrl, title, authors, pageCount, publisher, published },
  onClick
}: IBookCard) {
  return (
    <Container onClick={onClick}>
      <div className="book__image">
        <Image
          src={imageUrl}
          alt={title}
          width={81}
          height={122}
          blurDataURL={imageUrl}
          placeholder="blur"
        />
      </div>
      <div className="book__info">
        <div>
          <h1>{title}</h1>
          <h3>{authors}</h3>
        </div>
        <div>
          <p>{pageCount} páginas</p>
          <p>{publisher}</p>
          <p>Publicado em {published}</p>
        </div>
      </div>
    </Container>
  )
}
