import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme/default'

import { Router } from './routes'

import { AuthContextProvider } from './context/authContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
