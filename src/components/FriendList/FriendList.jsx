import PropTypes from "prop-types"
import {FriendContainer} from "components/FriendList/FrendListStyled"
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import {FriendItemStyle} from 'components/FriendListItem/FriendItemStyled'
export const FriendList=({ friends }) =>{
  return (<FriendContainer>
        {friends.map(friend => {
          return(<FriendItemStyle key={friend.id} >
          <FriendListItem
                avatar={friend.avatar}
                id={friend.id}
                name={friend.name}
              isOnline={friend.isOnline} />
            </FriendItemStyle>
          )
        })}
      </FriendContainer>);
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }))
}