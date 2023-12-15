import { useContext, createContext, useState, useEffect } from 'react'

import { api } from '../utils/axios'
import { useNotificationContext } from './NotificationContext'

export const AuthContext = createContext({})

export function AuthContextProvider({ children }) {
  const { createNotification, errosNotificationHandler } =
    useNotificationContext()

  const [userData, setUserData] = useState({})

  async function signUp({ name, email, password }) {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
      })

      createNotification({
        title: 'Usuário criado com sucesso!!',
        status: 'sucess',
      })

      return response
    } catch (error) {
      return errosNotificationHandler(
        error,
        'Não foi possível criar o usuário!',
      )
    }
  }

  async function signIn({ email, password }) {
    try {
      const {
        data: { user, token },
      } = await api.post('/sessions', {
        email,
        password,
      })

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setUserData({ user, token, isAdmin: Boolean(user.admin) })

      return createNotification({
        title: 'Usuário Logado com sucesso!!',
        status: 'sucess',
      })
    } catch (error) {
      return errosNotificationHandler(
        error,
        'Não foi possível realizar o login!',
      )
    }
  }

  function logOut() {
    localStorage.removeItem('@foodexplorer:user')
    localStorage.removeItem('@foodexplorer:token')
    setUserData({})

    return createNotification({
      title: 'Usuário deslogado com sucesso!!',
      status: 'sucess',
    })
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('@foodexplorer:user'))
    const token = localStorage.getItem('@foodexplorer:token')

    if (user && token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      const isAdmin = Boolean(user.admin) ?? false

      return setUserData({
        user,
        token,
        isAdmin,
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: userData.user,
        isAdmin: userData.isAdmin,
        signUp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  return context
}
