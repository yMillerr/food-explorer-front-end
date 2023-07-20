/* eslint-disable react/prop-types */
import { useState } from 'react'

import { HeaderContainer, LogoContainer, MobileMenuContainer } from './styles'

import LogoFoodExplorer from '../../assets/logo/logo-foodExplorer.png'
import MenuIcon from '../../assets/icons/icon-menu.svg'
import ReceiptIcon from '../../assets/icons/icon-receipt.svg'

import closeMenu from '../../assets/icons/icon-close.svg'
import { BsSearch } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'

import { Input } from '../Input'

export function Header({ isAdmin = true }) {
  const [openMenu, setOpenMenu] = useState('close')

  const handleOpenMenu = () => setOpenMenu('open')
  const handleCloseMenu = () => setOpenMenu('close')

  return (
    <HeaderContainer>
      <button onClick={handleOpenMenu} className="menu-button">
        <img src={MenuIcon} alt="" />
      </button>

      <LogoContainer>
        <img src={LogoFoodExplorer} alt="" />

        <h1>
          FoodExplorer
          {isAdmin && <span>Admin</span>}
        </h1>
      </LogoContainer>

      <Input icon={BsSearch} placeholder="Busque por pratos ou ingredientes" />

      {!isAdmin && (
        <a className="receipt-button-mobile">
          <img src={ReceiptIcon} alt="" />
          <span>0</span>
        </a>
      )}

      {isAdmin ? (
        <a href="/" className="dektop-order-button">
          <span>Novo Prato</span>
        </a>
      ) : (
        <a href="/" className="dektop-order-button">
          <img src={ReceiptIcon} alt="" />
          <span>Meu pedido (0) </span>
        </a>
      )}

      <button className="signout-button">
        <FiLogOut size={32} />
      </button>

      <MobileMenuContainer className={openMenu}>
        <header>
          <button onClick={handleCloseMenu}>
            <img src={closeMenu} alt="" />
          </button>

          <p>Menu</p>
        </header>

        <main>
          <Input
            icon={BsSearch}
            placeholder="Busque por pratos ou ingredientes"
          />

          <div>
            {isAdmin && (
              <a className="menu-content" href="/">
                Novo prato
              </a>
            )}

            <a className="menu-content" href="/">
              Sair
            </a>
          </div>
        </main>
      </MobileMenuContainer>
    </HeaderContainer>
  )
}
