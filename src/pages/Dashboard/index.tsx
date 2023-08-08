import React from "react";
import styles from "./style.module.scss";
import DashboardLeftBar from "../../components/DashboardLeftBar";
import { useSearchParams } from "react-router-dom";
import DashboardDetailsSide from "../../components/DashboardDetailsSide";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");

  return (
    <div className={styles.container}>
      <DashboardLeftBar />

      <DashboardDetailsSide jobId={jobId} />
    </div>
  );
};

export default Dashboard;
