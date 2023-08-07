import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const DashboardLeftBar = () => {
  return (
    <div className={styles.container}>
      <Link to={"?jobId=foodergood.com"}>
        <div className={styles.linkBtn}>FooderGood.com</div>
      </Link>
      <Link to={"?jobId=google.com"}>
        <div className={styles.linkBtn}>Google.com</div>
      </Link>
      <button className={styles.createJobBtn}>+ Create new job</button>
    </div>
  );
};

export default DashboardLeftBar;
