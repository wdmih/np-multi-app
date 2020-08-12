import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

export const UserProfile = () => {
  const auth = useContext(AuthContext)
  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
  }
  return (
    <div className="section">
      <h3 className="header">Profile</h3>
      <p className="caption">
        You can logout from this application by pressing Logut button below
      </p>
      <div className="row">
        <div className="col s12">
          <button
            className="btn waves-effect waves-light red"
            onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
