import styles from "../styles/upcoming.module.css";
import exploreStyles from "../styles/explore.module.css";
import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";

export default function Upcoming() {
  return (
    <>
      <div className={styles.upcomingContainer}>
        <div className={exploreStyles.head}>
          <h3>oi</h3>
          <div className={`${exploreStyles.head} text-end mb-0`}>
            <Link to="/home">
              <img
                className={exploreStyles.arrowIcon}
                src="/img/arrow.png"
                alt=""
              />
            </Link>
            <div className={styles.actionBtn}>
              <AiOutlineCalendar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
