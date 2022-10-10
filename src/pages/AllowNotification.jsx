import React from "react";
import styles from "../styles/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import { FaHandPointUp } from "react-icons/fa";

export default function AllowNotification() {
  return (
    <div className={styles.PhoneConfirmContainer}>
      <div className="text-center">
        <h1 className="mb-4">Last, important step!</h1>
        <h3 className="mb-3">
          Enable notification to know when people are talking
        </h3>
        <div className={styles.notificationContainer}>
          <div className="p-3">
            <h3>"Clubhouse" Would Like To Send You Notifications</h3>
            <p>Notifications may include alerts, sounds, and icon badges</p>
          </div>
          <div className={styles.action_btn}>
            <Link to="/">
              Don't Allow
            </Link>
            <Link to="/home">
              Allow
            </Link>
            <FaHandPointUp className={styles.hand_icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
