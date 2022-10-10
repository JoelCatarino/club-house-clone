import React from "react";
import { Link } from "react-router-dom";
import exploreStyles from "../styles/explore.module.css";

export default function SubHeader({ pageTitle }) {
  return (
    <div className={exploreStyles.head}>
      <Link to="/home">
        <img src="/img/arrow.png" alt="home" />
      </Link>
      <h3>{pageTitle}</h3>
    </div>
  );
}
