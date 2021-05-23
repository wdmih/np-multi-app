import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { UserDataContext } from '../../context/user-data.context'

export const ProfilesListItem = ({ item, clickHandler }) => {
  const { currentApiKey } = useContext(UserDataContext)
  return (
    <li className="tab">
      <a
        href="#1"
        className={cx('white-text', 'text-darken-4', {
          active: currentApiKey === item.npProfileApiKey
        })}
        onClick={() => clickHandler(item.npProfileApiKey)}>
        {item.npProfileName}
      </a>
    </li>
  )
}

ProfilesListItem.propTypes = {
  item: PropTypes.object,
  clickHandler: PropTypes.func
}
