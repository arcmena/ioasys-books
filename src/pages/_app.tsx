import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

import { AuthProvider } from 'contexts/AuthContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}
