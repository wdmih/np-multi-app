import React, { useContext } from "react"
import { UserDataContext } from "../../../context/user-data.context"
import { ProfilesListTableRow } from "./ProfilesListTableRow"

export const NPProfileList = () => {
  const { userData, userDataDelete } = useContext(UserDataContext)

  const deleteApikeyHandler = (id) => {
    userDataDelete(id)
  }

  return (
    <div className="section">
      <h3 className="header">Your active NP profiles</h3>
      <p className="caption">The list of all NP profiles that was added</p>
      {userData ? (
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
                {Object.keys(userData).map((key) => (
                  <ProfilesListTableRow
                    key={key}
                    item={userData[key]}
                    deleteApikeyHandler={deleteApikeyHandler}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p style={{ color: "orange" }}>
          There are no profile yet. Use form below to add new profile
        </p>
      )}
    </div>
  )
}
