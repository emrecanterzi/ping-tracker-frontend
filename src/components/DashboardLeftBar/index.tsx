import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

interface IProps {
  jobs: {
    jobId: string;
    title: string;
  }[];
}

const DashboardLeftBar = ({ jobs }: IProps) => {
  return (
    <div className={styles.container}>
      {jobs.map((job) => (
        <Link to={`?jobId=${job.jobId}`}>
          <div className={styles.linkBtn}>{job.title}</div>
        </Link>
      ))}

      <button className={styles.createJobBtn}>+ Create new job</button>
    </div>
  );
};

export default DashboardLeftBar;
