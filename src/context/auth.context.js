import { createContext } from 'react'

function noop () {}

export const AuthContext = createContext({
  user: null,
  register: noop,
  login: noop,
  logout: noop,
  isAuthenticated: false,
  isLoading: true
})
