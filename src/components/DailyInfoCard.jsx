import React from "react";
import styles from "../styles/dailyInfoCard.module.css";
import data from "../data/dailyCard.json";

export default function dailyInfoCard() {
  return (
    <div className={styles.dailyCard}>
      {data.map((item) => (
        <div>
          <span>{item.time}</span>
          <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
