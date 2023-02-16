import user from 'JsonComponents/user.json'
import data from 'JsonComponents/data.json'
import friends from 'JsonComponents/friends.json'
import transaction from 'JsonComponents/transactions.json'
import { Profile } from './Profile/Profile';
import { Statistic } from './statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';



export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />,
    <Statistic
      title="Upload"
      stats={data}
      />,
      <FriendList
        friends={friends}
      />,
      <TransactionHistory
      items={transaction}/>
      
  </div>
  );
};
