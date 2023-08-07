import React from "react";
import styles from "./style.module.scss";
import DashboardLeftBar from "../../components/DashboardLeftBar";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");

  return (
    <div className={styles.container}>
      <DashboardLeftBar />

      <div>job details - {jobId}</div>
    </div>
  );
};

export default Dashboard;
