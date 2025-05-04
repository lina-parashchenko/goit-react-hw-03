import css from "./Profile.module.css";
import clsx from "clsx";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={clsx(css.line, css.container)}>
      <div className={css.information}>
        <img src={image} alt={name} width={150} className={css.background} />
        <p className={css.font}>{name}</p>
        <p className={css.colorText}>@{tag}</p>
        <p className={css.colorText}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.font}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.font}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.font}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
