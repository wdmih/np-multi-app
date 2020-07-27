import React from "react"

export const ProfilesListItem = ({ item, clickHandler }) => {
  return (
    <li className="tab">
      <a
        href="#1"
        className="white-text text-darken-4"
        onClick={() => clickHandler(item.npProfileApiKey)}>
        {item.npProfileName}
      </a>
    </li>
  )
}
