import React from "react";
import styles from "../styles/roomInfoCard.module.css";
import data from "../data/roomCard.json";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";

export default function RoomInfoCard() {
  return (
    <>
      {data.map((item) => (
        <div>
          <div>
            <div className={styles.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <div className={styles.roomMembers}>
                <div>
                  <img src="./img/user-img.jpg" alt="" />
                  <img src="./img/user-img2.jpg" alt="" />
                </div>
                <div>
                  {item.members.map((person) => (
                    <p>
                      {person.first_name} {person.last_name} <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex align-items-center">
                    <span className="ms-2">1.8</span>
                    <BsFillPersonFill className="ms-1"/>
                    <span className="mx-2"></span>{" "}
                    <span className="ms-3">5</span>
                    <BsChatDotsFill className="ms-1"/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
