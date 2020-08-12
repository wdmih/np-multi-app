import PropTypes from 'prop-types'
import React from 'react'

export const ProfilesListTableRow = ({ item, deleteApikeyHandler }) => {
  const { npProfileName, npProfileApiKey, userDataKey } = item
  return (
    <tr>
      <td>{npProfileName}</td>
      <td>
        <span>{npProfileApiKey}</span>
      </td>
      <td>
        <button
          className="btn-flat"
          style={{ color: '#c62828' }}
          onClick={() => deleteApikeyHandler(userDataKey)}>
          <i className="material-icons">delete</i>
        </button>
      </td>
    </tr>
  )
}

ProfilesListTableRow.propTypes = {
  item: PropTypes.object,
  deleteApikeyHandler: PropTypes.func
}
