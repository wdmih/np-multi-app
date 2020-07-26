import React, { useContext, useState } from "react"
import { UserDataContext } from "../../context/user-data.context"
import { AuthContext } from "../../context/auth.context"

export const AddNPProfile = () => {
  const { userDataSet, inProgress } = useContext(UserDataContext)
  const { user } = useContext(AuthContext)
  const [form, setForm] = useState({
    npProfileName: "",
    npProfileApiKey: "",
  })

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const addProfileHandler = (event) => {
    event.preventDefault()
    userDataSet(user.uid, form.npProfileName, form.npProfileApiKey)
    setForm({
      npProfileName: "",
      npProfileApiKey: "",
    })
  }

  return (
    <div className="section">
      <h3 className="header">Add new New Post profile</h3>
      <p className="caption">Type profile name and profile APIKEY</p>
      <form>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="name"
              name="npProfileName"
              type="text"
              value={form.npProfileName}
              onChange={changeHandler}
            />
            <label htmlFor="name">Name</label>
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right">
              Enter the name of NP profile
            </span>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="apikey"
              name="npProfileApiKey"
              type="text"
              value={form.npProfileApiKey}
              onChange={changeHandler}
            />
            <label htmlFor="apikey">NP API KEY</label>
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right">
              Enter the name API KEY of New Post cabinet
            </span>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <button
              className="btn waves-effect waves-light green"
              onClick={addProfileHandler}
              disabled={inProgress}>
              Add Profile
              <i className="material-icons left">add</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
