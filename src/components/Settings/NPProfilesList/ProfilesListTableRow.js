import React from "react"
export const ProfilesListTableRow = (itemData) => {
  const { npProfileName, npProfileApiKey } = itemData.value
  return (
    <tr>
      <td>{npProfileName}</td>
      <td>
        <span>{npProfileApiKey}</span>
      </td>
      <td>
        <button className="btn-flat" style={{ color: "#c62828" }}>
          <i className="material-icons">delete</i>
        </button>
      </td>
    </tr>
  )
}
