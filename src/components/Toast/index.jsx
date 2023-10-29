import { useEffect, useState } from 'react'

import { Provider } from '@radix-ui/react-toast'
import { IconWarning, IconSucess } from '../../assets/icons'

import { Root, Viewport, Title } from './styles'

import { useNotificationContext } from '../../context/NotificationContext'

export function Toast() {
  const { notifications } = useNotificationContext()

  const [notify, setNotify] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    notifications.map((notification) => {
      setNotify([notification])
      return setOpen(true)
    })
  }, [notifications])

  return (
    <>
      {notify.map((notification) => {
        return (
          <Provider key={notification.id}>
            <Root
              open={open}
              duration={2000}
              status={notification.status}
              onOpenChange={setOpen}
            >
              <Title>
                {notification.status === 'sucess' ? (
                  <span>
                    <IconSucess size={32} color={'#04D361'} />
                  </span>
                ) : (
                  <span>
                    <IconWarning size={32} color="#AB222E" />
                  </span>
                )}
                {notification.title}
              </Title>
            </Root>

            <Viewport />
          </Provider>
        )
      })}
    </>
  )
}
