import React from "react"

const CreateNPProfile = () => {
  return (
    <div className="card text-white bg-dark mb-3" style={{ maxWidth: "28rem" }}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label for="NPProfileName">Name</label>
            <input
              type="text"
              className="form-control"
              id="NPProfileName"
              aria-describedby="NPProfileHelp"
            />
            <small id="NPProfileHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="NPProfileApikey">APIKEY</label>
            <input
              type="text"
              className="form-control"
              id="NPProfileApikey"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateNPProfile
