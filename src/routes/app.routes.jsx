import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { ProductInfo } from '../pages/ProductInfo'
import { New } from '../pages/New'

import { Layout } from '../layouts/Layout'
import { Edit } from '../pages/Edit'

export function AppUsersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/product" element={<ProductInfo />} />
      </Route>
    </Routes>
  )
}
