import { useState, useEffect } from 'react'
import { Close, Content, Trigger } from './styles'

import { IconMenu, IconClose, IconSearch } from '../../../../assets/icons'

import * as Dialog from '@radix-ui/react-dialog'

import { Link } from 'react-router-dom'

import { Footer } from '../../../Footer'
import { Input } from '../../../Input'

export function HeaderModal({ onLogout, isAdmin, onChange }) {
  const [open, setOpen] = useState(false)

  function handleLogOut() {
    onLogout()
  }

  useEffect(() => {
    window.addEventListener('resize', () =>
      innerWidth >= 768 ? setOpen(false) : null,
    )
  }, [])

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Trigger>
        <IconMenu />
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
              onChange={onChange}
            />

            <div>
              {isAdmin && (
                <Dialog.Close asChild>
                  <Link to="/new">Novo prato</Link>
                </Dialog.Close>
              )}

              <Dialog.Close asChild>
                <Link to="/" onClick={handleLogOut}>
                  Sair
                </Link>
              </Dialog.Close>
            </div>
          </main>

          <Footer />
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
