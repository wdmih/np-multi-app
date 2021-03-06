import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth.context'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = (event) => {
    event.preventDefault()
    auth.register({ ...form })
  }

  const loginHandler = useCallback((event) => {
    event.preventDefault()
    auth.login({ ...form })
  }, [auth, form])

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        console.log('Enter key was pressed. Run your function.')
        loginHandler(event)
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [loginHandler])

  return (
    <div className="card m-auto blue-grey lighten-5" style={{ width: 400 }}>
      <div className="card-content">
        <span className="card-title">Authorization</span>
        <form>
          <div className="row">
            <div className="input-field">
              <input
                id="email"
                type="email"
                name="email"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                id="password"
                type="password"
                name="password"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
        </form>
      </div>
      <div className="card-action">
        <button
          className="btn green darken-2"
          onClick={loginHandler}
          style={{ marginRight: 10 }}>
          Sign in
        </button>
        <button
          className="btn grey lighten-1 black-text"
          onClick={registerHandler}>
          Sign Up
        </button>
      </div>
    </div>
  )
}
