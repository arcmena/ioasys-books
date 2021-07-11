import { useContext } from 'react'

import BookContext from 'contexts/BookContext'

const useBook = () => {
  const context = useContext(BookContext)

  if (!context)
    throw new Error('useBook must be used within a BookContextProvider!')

  return context
}

export default useBook
