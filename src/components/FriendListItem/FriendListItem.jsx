import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" className={css.imageOfAnimal} />
      <p className={css.nameOfAnimal}>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
