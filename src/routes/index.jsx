import { BrowserRouter } from 'react-router-dom'

import { AuthRoutes } from './auth.routes'

import { useAuthContext } from '../context/AuthContext'

import { AppRoutes } from './app.routes'

import { Toast } from '../components/Toast'

export function Router() {
  const { user } = useAuthContext()

  return (
    <BrowserRouter>
      <Toast />
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
