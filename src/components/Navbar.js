import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span class="navbar-brand">Navbar</span>
      <form class="form-inline">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Add
        </button>
      </form>
    </nav>
  )
}

export default Navbar