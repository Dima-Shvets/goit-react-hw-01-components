import PropTypes from "prop-types";
import s from "./Profile.module.scss";

export const Profile = ({
  avatar,
  userName,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{userName}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>
            {followers.toLocaleString("en-IN")}
          </span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views.toLocaleString("en-IN")}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes.toLocaleString("en-IN")}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
