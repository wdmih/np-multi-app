import { createContext } from 'react'

function noop () {}

export const UserDataContext = createContext({
  userData: null,
  userDataSet: noop,
  userDataDelete: noop,
  error: null,
  inProgress: false,
  currentApiKey: null,
  setCurrentApiKey: noop
})
