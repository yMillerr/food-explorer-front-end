import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { New } from '../pages/New'

import { Layout } from '../layouts/Layout'
import { Edit } from '../pages/Edit'
import { useAuthContext } from '../context/AuthContext'

export function AppRoutes() {
  const { isAdmin } = useAuthContext()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Products />} />

        {isAdmin && (
          <>
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
          </>
        )}
      </Route>
    </Routes>
  )
}
