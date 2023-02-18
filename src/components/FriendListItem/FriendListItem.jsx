import PropTypes from "prop-types"
import { Fragment } from "react"
import {FriendStatus} from "components/FriendListItem/FriendItemStyled"
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Fragment>
      <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Fragment>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}