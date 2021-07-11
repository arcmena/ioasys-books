import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

import { AuthProvider } from 'contexts/AuthContext'
import { BookProvider } from 'contexts/BookContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BookProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </BookProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
