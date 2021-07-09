export interface IBooks {
  id: string
  title: string
  description: string
  authors: string[]
  pageCount: number
  category: string
  imageUrl: string
  isbn10: string
  isbn13: string
  language: string
  publisher: string
  published: number
}

export interface IBookResponse {
  data: IBooks[]
  page: number
  totalPages: number
  totalItems: number
}
