import React from 'react'
import { Link } from 'react-router-dom'

export const SideNav = () => {
  return (
    <ul className="sidenav sidenav-fixed">
      <li className="logo">
        <Link to="/" className="brand-logo">
          LOGO
          {/* <object
              id="front-page-logo"
              type="image/svg+xml"
              data="res/materialize.svg">
              Your browser does not support SVG
            </object> */}
        </Link>
      </li>
      <li className="divider"></li>
      <li className="bold">
        <Link to="/outgoing" className="waves-effect waves-red">
          Outgoing
        </Link>
      </li>
      <li className="bold">
        <Link to="/incoming" className="waves-effect waves-red">
          Incoming
        </Link>
      </li>
    </ul>
  )
}
