/* eslint-disable react/prop-types */

import { useContext, createContext, useState } from 'react'

import { api } from '../utils/axios'

export const AuthContext = createContext({})

export function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { user, token } = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      return setUserData({ user, token })
    } catch (error) {
      if (error.data) {
        return alert(error.data.message)
      } else {
        return alert('Não foi possivel fazer login')
      }
    }
  }

  console.log(userData)

  return (
    <AuthContext.Provider value={{ signIn, user: userData.user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  return context
}
