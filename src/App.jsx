import React from 'react';
import Profile from './components/Profile';
import userData from './ userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import transactions from './transactions.json';
import './App.css'

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


export default App
