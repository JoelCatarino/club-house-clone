import React from "react";
import exploreStyles from "../styles/explore.module.css";
import styles from "../styles/profile.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Profile() {
  return (
    <>
      <div className={styles.profileContainer}>
        <div className={exploreStyles.header}>
          <div className={`${exploreStyles.head} text-end mb-0`}>
            <Link to="/home">
              <img
                className={exploreStyles.arrowIcon}
                src="/img/arrow.png"
                alt=""
              />
            </Link>
            <div className={styles.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img className={styles.profileImg} src="/img/user-img.jpg" alt="" />
        <h4>joel Catarino</h4>
        <p>@joelcatrino</p>
        <div className={styles.follow}>
          <p>
            <span>0</span> followers
          </p>
          <p>
            <span>34</span> following
          </p>
        </div>
        <button className="p-1">Add a bio</button>
        <div>
          <button>
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button>
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className={styles.nominated}>
          <img src="/img/user-img.jpg" alt="" />
          <div>
            <p>Joined 10-04-2018</p>
            <p>
              Nominated by <span>Anton Al</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={styles.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
}
