import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="nav-extended red darken-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Logo
        </Link>
        <ul className="right">
          <li>
            <Link to="/settings">
              <i className="material-icons">settings</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
