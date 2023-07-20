import { BrowserRouter } from 'react-router-dom'

// import { AppUsersRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Router() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
