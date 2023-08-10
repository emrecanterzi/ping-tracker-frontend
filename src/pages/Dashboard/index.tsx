import React, { useEffect } from "react";
import styles from "./style.module.scss";
import DashboardLeftBar from "../../components/DashboardLeftBar";
import { useSearchParams } from "react-router-dom";
import DashboardDetailsSide from "../../components/DashboardDetailsSide";
import { getJobsAction } from "../../features/jobs/asyncActions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { IJob } from "../../interfaces/Job";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const jobs = useSelector<RootState, IJob[]>((state) => state.job.jobs);

  useEffect(() => {
    dispatch(getJobsAction());
  }, [dispatch]);

  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");

  if (jobs.length === 0) {
    return <>loading</>;
  }

  return (
    <div className={styles.container}>
      <DashboardLeftBar
        jobs={jobs.map((job) => ({ title: job.title, jobId: job.jobId }))}
      />

      <DashboardDetailsSide
        job={jobs.find((job) => job.jobId === jobId) || jobs[0]}
      />
    </div>
  );
};

export default Dashboard;
