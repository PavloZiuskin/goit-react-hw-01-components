import { FriendListItem } from "components/FriendListItem/FriendListItem";
export const FriendList=({ friends }) =>{
    return(<ul class="friend-list">
        {friends.map(frend => {
            return <FriendListItem
                avatar={frend.avatar}
                id={frend.id}
                name={frend.name}
                isOnline={frend.isOnline } />
        })}
      </ul>);
}