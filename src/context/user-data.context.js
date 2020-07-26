import { createContext } from "react"

function noop() {}

export const UserDataContext = createContext({
  userData: null,
  userDataSet: noop,
  error: null,
  inProgress: false,
})
