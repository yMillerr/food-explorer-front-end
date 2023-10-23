import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme/default'

import { Router } from './routes'

import { AuthContextProvider } from './context/AuthContext'
import { ProductsContextProvider } from './context/ProductsContext'
import { NotificationContextProvider } from './context/NotificationContext'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <NotificationContextProvider>
        <AuthContextProvider>
          <ProductsContextProvider>
            <Router />
          </ProductsContextProvider>
        </AuthContextProvider>
      </NotificationContextProvider>
    </ThemeProvider>
  )
}
