import css from "../FriendList/FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.animalsList}>
        {friends.map((friend) => (
          <li className={css.animalsItem} key={friend.id}>
            <FriendListItem friends={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
