/* eslint-disable react/prop-types */

import {
  Close,
  Content,
  HeaderContainer,
  LogoContainer,
  Trigger,
} from './styles'

import LogoFoodExplorer from '../../assets/logo/logo-foodExplorer.png'
import MenuIcon from '../../assets/icons/icon-menu.svg'

import closeMenu from '../../assets/icons/icon-close.svg'

import { BsSearch } from 'react-icons/bs'
import { IconReceipt } from '../../assets/icons/icon-receipt.svg'
import { FiLogOut } from 'react-icons/fi'
import { IconSearch } from '../../assets/icons/icon-search.svg'

import { Input } from '../Input'
import { Footer } from '../Footer'

import { Link } from 'react-router-dom'

import * as Dialog from '@radix-ui/react-dialog'

import { useEffect, useState } from 'react'

export function Header({ isAdmin = false }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (innerWidth >= 1024) {
        setOpen(false)
      }
    })
  }, [])
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
                <img src={closeMenu} alt="" />
                <span>Menu</span>
              </Close>
            </header>

            <main>
              <Input icon={IconSearch} placeholder="Procure algum produto" />

              <div>
                <Link>Hello world</Link>
              </div>
            </main>

            <Footer />
          </Content>
        </Dialog.Portal>
      </Dialog.Root>

      <LogoContainer to="/">
        <img src={LogoFoodExplorer} alt="" />

        <h1>
          Food Explorer
          {isAdmin && <span>Admin</span>}
        </h1>
      </LogoContainer>

      <Input icon={BsSearch} placeholder="Busque por pratos ou ingredientes" />

      {!isAdmin && (
        <a className="receipt-button-mobile">
          <IconReceipt />
          <span>0</span>
        </a>
      )}

      {isAdmin ? (
        <Link to="/" className="dektop-order-button">
          Novo Prato
        </Link>
      ) : (
        <Link to="/" className="dektop-order-button">
          <IconReceipt size={32} />
          pedidos 0
        </Link>
      )}

      <Link to="/">
        <FiLogOut size={32} color="#fff" />
      </Link>
    </HeaderContainer>
  )
}
