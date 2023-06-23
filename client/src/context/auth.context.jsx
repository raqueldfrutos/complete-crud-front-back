import React, { createContext, useEffect, useState } from 'react'
import authService from '../services/auth.service'

const token_name = 'authToken'

export const AuthContext = createContext()

export const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    authenticate()
  }, [])

  const storeToken = token => {
    localStorage.setItem(token_name, token)
  }

  const removeToken = () => {
    localStorage.removeItem(token_name)
  }

  const logout = () => {
    setLoading(false)
    setUser()
    removeToken()
  }

  const authenticate = async () => {
    const token = localStorage.getItem(token_name)
    if (!token) {
      logout()
    }
    setLoading(true)
    return authService
      .verify(token)
      .then(user => {
        setLoading(false)
        setUser(user)
      })
      .catch(err => {
        logout()
        setError('You are not authenticated!')
      })
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        storeToken,
        authenticate,
        logout,
        removeToken,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
