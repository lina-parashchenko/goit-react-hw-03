import css from "./App.module.css";

import userData from "../../UserData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const { username, tag, location, avatar, stats } = userData;

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
