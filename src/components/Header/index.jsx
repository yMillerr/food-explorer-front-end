import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { HeaderContainer, LogoContainer } from './styles'

import LogoFoodExplorer from '../../assets/logo/logo-foodExplorer.png'
import { BsSearch } from 'react-icons/bs'
import { IconReceipt } from '../../assets/icons/icon-receipt.svg'
import { FiLogOut } from 'react-icons/fi'

import { HeaderModal } from './components/HeaderModal'
import { ButtonLink } from '../ButtonLink'
import { Input } from '../Input'

import { useAuthContext } from '../../context/AuthContext'
import { useProductsContext } from '../../context/ProductsContext'

export function Header() {
  const { queryProducts } = useProductsContext()
  const { isAdmin, logOut } = useAuthContext()

  const [query, setQuery] = useState('')

  function handleLogOut() {
    logOut()
  }

  useEffect(() => {
    queryProducts(query)
  }, [query])

  return (
    <HeaderContainer>
      <HeaderModal
        onLogout={logOut}
        onChange={(e) => setQuery(e.target.value)}
        isAdmin={isAdmin}
      />

      <LogoContainer>
        <img src={LogoFoodExplorer} alt="" />

        <h1>
          Food Explorer
          {isAdmin && <span>Admin</span>}
        </h1>
      </LogoContainer>

      <Input
        icon={BsSearch}
        placeholder="Busque por pratos ou ingredientes"
        onChange={(e) => setQuery(e.target.value)}
      />

      {!isAdmin && (
        <Link to="/" className="receipt-button-mobile">
          <IconReceipt />
          <span>0</span>
        </Link>
      )}

      <section>
        {isAdmin ? (
          <ButtonLink title="Novo prato" to="/new" />
        ) : (
          <ButtonLink title="Pedidos" icon={IconReceipt} />
        )}
      </section>

      <Link to="/" onClick={handleLogOut}>
        <FiLogOut size={32} color="#fff" />
      </Link>
    </HeaderContainer>
  )
}
