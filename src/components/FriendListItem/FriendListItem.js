import PropTypes from "prop-types";
import { StatusIndicator } from "../StatusIndicator";
import s from "./FriendListItem.module.scss";

export function FriendListItem({ avatar, name, isOnline = false }) {
  return (
    <li className={`${s.list} ${s.item}`}>
      <StatusIndicator isOnline={isOnline} className={s.status} />
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
