import React, { useState, useContext, Fragment } from "react"
import { AuthContext } from "../context/auth.context"

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = (event) => {
    event.preventDefault()
    auth.register({ ...form })
  }

  const loginHandler = (event) => {
    event.preventDefault()
    auth.login({ ...form })
  }

  return (
    <Fragment>
      <div className="my-auto card text-white bg-dark">
        <div className="card-header"></div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                placeholder="Enter email"
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={changeHandler}
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                placeholder="Enter password"
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={changeHandler}
              />
            </div>
            <button className="btn btn-primary" onClick={loginHandler}>
              Login
            </button>
            <button className="btn btn-primary" onClick={registerHandler}>
              Register
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}
