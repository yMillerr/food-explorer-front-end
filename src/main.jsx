import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme/default'

import { Router } from './routes'

import { AuthContextProvider } from './context/AuthContext'
import { ProductsContextProvider } from './context/ProductsContext'
import { NotificationContextProvider } from './context/NotificationContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)
