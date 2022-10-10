import React from "react";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/explore">
        <img src="/img/search.png" alt="" />
      </Link>
      <div className={styles.nav_items}>
        <Link to="/friends_invite">
            <img src="/img/invite.png" alt="" />
        </Link>
        <Link to="/upcoming">
            <img src="/img/calendar.png" alt="" />
        </Link>
        <Link to="/activity">
            <img src="/img/noti.png" alt="" />
        </Link>
        <Link to="/profile">
            <img src="/img/b1.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
