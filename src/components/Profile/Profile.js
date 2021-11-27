import PropTypes from "prop-types";
import s from "./Profile.module.scss";

// import user from 'путь/к/user.json;

// <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />

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
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{userName}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
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
