import s from "./FriendList.module.scss";
import { FriendListItem } from "../FriendListItem";
import PropTypes from "prop-types";

export function FriendList({ friends }) {
  return (
    <ul className={s["friend-list"]}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id.toString()}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friends.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
