import React from "react";
import styles from "../styles/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export default function CodeConfirm() {
  return (
    <div className={styles.PhoneConfirmContainer}>
      <Link to="/invite" className={styles.BackBtn}>
        <BsArrowLeft size="25px" color="black" />
      </Link>
      <div
        className="text-center"
        style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}
      >
        <h1>Enter the code we just texted you</h1>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
        <p className="mt-2">
          Didn't receive it?{" "}
          <span>
            <b>Tap to resend.</b>
          </span>
        </p>
      </div>
      <Link
        to="/allow_notification"
        className="primaryBtn d-flex align-items-center mt-3"
      >
        Next
      </Link>
    </div>
  );
}
