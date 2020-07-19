import React from "react"
import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="collection">
      <Link to="/outgoing" className="collection-item">
        Out
      </Link>
      <Link to="/incoming" className="collection-item">
        Income
      </Link>
    </div>
  )
}
