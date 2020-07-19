import React, { useContext } from "react"
import { AuthContext } from "../context/auth.context"

export const Settings = () => {
  const auth = useContext(AuthContext)
  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
  }
  return (
    <div>
      <button className="btn" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  )
}
