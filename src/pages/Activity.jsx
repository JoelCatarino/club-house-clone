import styles from "../styles/activity.module.css";
import exploreStyles from "../styles/explore.module.css";
import SubHeader from "../components/SubHeader";

export default function Activity() {
  return (
    <>
      <div className={styles.activityContainer}>
        <div className={exploreStyles.header}>
          <SubHeader pageTitle="Activity" />
        </div>
        <div className={styles.peopleContainer}>
        <div className="d-flex align-items-center">
              <img src="/img/user-img.jpg" alt="" />
              <div className="ms-2">
                <p>Grant Cardone scheduled "10X Kids w/"</p>
                <p>Sabrina & Scarlett Cardone" for Monday</p>
                <p>April 12 at 1:00am</p>
              </div>
              <span>1 d ago</span>
            </div>
        </div>
      </div>
    </>
  );
}
