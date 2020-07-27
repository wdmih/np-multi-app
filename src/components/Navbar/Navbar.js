import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserDataContext } from "../../context/user-data.context"
import { ProfilesListItem } from "./ProfilesListItem"

export const Navbar = () => {
  const { userData } = useContext(UserDataContext)
  const setCurrentProfileHandler = (apiKey) => {
    console.log("setCurrentProfileHandler -> apiKey", apiKey)
  }
  return (
    <div className="navbar-fixed">
      <nav className="red lighten-2">
        <div className="nav-wrapper">
          <div className="left">
            <ul>
              <li className="profiles-heading m-auto">
                <h5>Profiles</h5>
              </li>
              <li>
                <ul className="tabs">
                  {userData
                    ? Object.keys(userData).map((key) => (
                        <ProfilesListItem
                          key={key}
                          item={userData[key]}
                          clickHandler={setCurrentProfileHandler}
                        />
                      ))
                    : ""}
                </ul>
              </li>
            </ul>
          </div>
          <ul className="right">
            <li>
              <Link to="/settings">
                <i className="material-icons">settings</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
