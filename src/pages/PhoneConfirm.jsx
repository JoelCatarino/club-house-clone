import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import styles from "../styles/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export default function PhoneConfirm() {
  const [value, setValue] = useState();

  return (
    <div className={styles.PhoneConfirmContainer}>
      <Link to="/" className={styles.BackBtn}>
        <BsArrowLeft size="2em" color="black" />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        defaultCountry="BR"
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy. </span> Thanks!
      </p>
      <Link
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center mt-3"
      >
        Next
      </Link>
    </div>
  );
}
