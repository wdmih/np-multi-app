import React, { useContext } from "react"
import { AuthContext } from "../context/auth.context"

export const Navbar = () => {
  const auth = useContext(AuthContext)
  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
  }
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">Navbar</span>
      <form className="form-inline">
        <button className="btn btn-outline-success my-2 my-sm-0">Add</button>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={logoutHandler}>
          Logout
        </button>
      </form>
    </nav>
  )
}
