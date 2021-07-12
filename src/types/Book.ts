export interface IBook {
  id: string
  title: string
  description: string
  authors: string
  pageCount: number
  category: string
  imageUrl: string
  isbn10: string
  isbn13: string
  language: string
  publisher: string
  published: number
}

export interface RawBook extends Omit<IBook, 'authors'> {
  authors: string[]
}

export interface IBookResponse {
  data: RawBook[]
  page: number
  totalPages: number
  totalItems: number
}
