import React from "react"

export const AddNPProfile = () => {
  return (
    <div className="section">
      <h3 className="header">Add new New Post profile</h3>
      <p className="caption">Type profile name and profile APIKEY</p>
      <form>
        <div className="row">
          <div className="input-field col s12">
            <input id="name" name="name" type="text" className="validate" />
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
            <input id="apikey" type="text" className="validate" />
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
            <button className="btn waves-effect waves-light green">
              Add Profile
              <i class="material-icons left">add</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
