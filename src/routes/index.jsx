import { BrowserRouter } from 'react-router-dom'

import { AuthRoutes } from './auth.routes'

import { useAuthContext } from '../context/authContext'

import { AppRoutes } from './app.routes'

export function Router() {
  const { user } = useAuthContext()

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
