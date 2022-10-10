import React, { useState } from "react";
import styles from "../../styles/roomDetail.module.css";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";

export default function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);

  const card = props.cardDetail;

  return (
    <>
      <div className={styles.roomDetailContainer}>
        <div className={styles.head}>
          <div className={"d-flex align-items-center"}>
            <a
              href="#"
              onClick={() => {
                props.setSheetVisible(false);
              }}
            >
              <img className={styles.arrowIcon} src="/img/arrow.png" alt="" />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img className={styles.profile} src="/img/user-img.jpg" alt="" />
          </div>
        </div>
        <div className={styles.roomDetailCard}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ padding: "0.5em 1em" }}
          >
            {card.members.map((item) => (
              <div className={styles.memberContainer}>
                {micMuteVisible ? (
                  <div className={styles.audioIcon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  <div className={styles.audioIcon}>
                    <BsMicFill />
                  </div>
                )}
                <img src="/img/user-img.jpg" alt="" />
                <p>
                  <span>*</span>
                  {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              props.setSheetVisible(false);
            }}
          >
            <img src="/img/hand-peace.png" alt="" />
            Leave Quietly
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
            <button>
              <img src="/img/stopHandIcon.png" alt="" />
            </button>
            <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
              {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
