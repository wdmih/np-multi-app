import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="red lighten-2">
        <div className="nav-wrapper">
          <ul className="right">
            <li>
              <Link to="/settings">
                <i className="material-icons">settings</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
