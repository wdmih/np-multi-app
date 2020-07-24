import React from "react"

export const NPProfileList = () => {
  return (
    <div className="section">
      <h3 className="header">Your active NP profiles</h3>
      <p className="caption">The list of all NP profiles that was added</p>
      <p style={{ color: "orange" }}>
        There are no profile yet. Use form below to add new profile
      </p>
      <div className="row">
        <div className="col s12">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ApiKey</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alvin</td>
                <td>
                  <span>HgjkkdsjfBJHKBHLNJLJLVLHLCKGKkn,sdhnfdksmjLHFjhf</span>
                </td>
                <td>
                  <button className="btn-flat" style={{ color: "#c62828" }}>
                    <i className="material-icons">delete</i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
