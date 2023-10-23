import { useEffect, useState } from 'react'
import { ButtonLink } from '../ButtonLink'

import {
  Close,
  Content,
  HeaderContainer,
  LogoContainer,
  Trigger,
} from './styles'

import LogoFoodExplorer from '../../assets/logo/logo-foodExplorer.png'
import MenuIcon from '../../assets/icons/icon-menu.svg'

import { IconClose } from '../../assets/icons/icon-close.svg'

import { BsSearch } from 'react-icons/bs'
import { IconReceipt } from '../../assets/icons/icon-receipt.svg'
import { FiLogOut } from 'react-icons/fi'
import { IconSearch } from '../../assets/icons/icon-search.svg'

import { Input } from '../Input'
import { Footer } from '../Footer'

import { Link } from 'react-router-dom'

import * as Dialog from '@radix-ui/react-dialog'

import { useAuthContext } from '../../context/AuthContext'
import { useProductsContext } from '../../context/ProductsContext'

export function Header() {
  const { fetchProducts } = useProductsContext()
  const { logOut, isAdmin } = useAuthContext()

  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  function handleLogOut() {
    logOut()
  }

  window.addEventListener('resize', () => innerWidth >= 768 && setOpen(false))

  useEffect(() => {
    fetchProducts(query)
  }, [query])

  return (
    <HeaderContainer>
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Trigger>
          <img src={MenuIcon} alt="" />
        </Trigger>
        <Dialog.Portal>
          <Content>
            <header>
              <Close>
                <IconClose />
                <span>Menu</span>
              </Close>
            </header>

            <main>
              <Input
                icon={IconSearch}
                placeholder="Procure algum produto"
                onChange={(e) => setQuery(e.target.value)}
              />

              <div>
                {isAdmin && <Link to="/new">Novo prato</Link>}

                <Link to="/" onClick={handleLogOut}>
                  Sair
                </Link>
              </div>
            </main>

            <Footer />
          </Content>
        </Dialog.Portal>
      </Dialog.Root>

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
