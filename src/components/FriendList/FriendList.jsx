import PropTypes from "prop-types"
import { FriendListItem } from "components/FriendListItem/FriendListItem";
export const FriendList=({ friends }) =>{
  return (<ul className="friend-list">
        {friends.map(friend => {
          return(<li className="item" key={friend.id} >
          <FriendListItem
                avatar={friend.avatar}
                id={friend.id}
                name={friend.name}
              isOnline={friend.isOnline} />
            </li>
          )
        })}
      </ul>);
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }))
}