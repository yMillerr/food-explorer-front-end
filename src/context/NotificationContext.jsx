import { createContext, useContext, useState } from 'react'

export const NotificationContext = createContext({})

export function NotificationContextProvider({ children }) {
  const [notifications, setNotifications] = useState([])

  function createNotification({ title, status = 'error' }) {
    setNotifications([
      {
        id: new Date().getMilliseconds() * 10,
        title,
        status,
      },
    ])
  }

  function errosNotificationHandler(error, genericDescription) {
    if (error.response) {
      return setNotifications([
        {
          id: new Date().getMilliseconds() * 10 + 1,
          title: error?.response.data.message,
          status: 'error',
        },
      ])
    }

    if (genericDescription) {
      return setNotifications([
        {
          id: new Date().getMilliseconds() * 10 + 1,
          title: genericDescription,
          status: 'error',
        },
      ])
    }
  }

  return (
    <NotificationContext.Provider
      value={{ createNotification, notifications, errosNotificationHandler }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotificationContext() {
  const context = useContext(NotificationContext)

  return context
}
