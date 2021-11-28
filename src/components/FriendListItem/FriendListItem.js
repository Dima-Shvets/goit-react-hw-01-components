import PropTypes from "prop-types";
import { StatusIndicator } from "../StatusIndicator";
// import s from "./FriendList.module.scss";

export function FriendListItem({ avatar, name, isOnline = "false" }) {
  return (
    <li className="item">
      <StatusIndicator isOnline={isOnline} className="status" />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
