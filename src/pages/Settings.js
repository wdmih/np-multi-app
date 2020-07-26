import React from "react"
import { AddNPProfile } from "../components/Settings/AddNPProfile"
import { NPProfileList } from "../components/Settings/NPProfilesList/NPProfilesList"
import { UserProfile } from "../components/Settings/UserProfile"

export const Settings = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8 offset-m1">
          <NPProfileList />
          <AddNPProfile />
          <UserProfile />
        </div>
      </div>
    </div>
  )
}
