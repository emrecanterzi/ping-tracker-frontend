import React, { useEffect } from "react";
import styles from "./style.module.scss";
import DashboardLeftBar from "../../components/DashboardLeftBar";
import { useSearchParams } from "react-router-dom";
import DashboardDetailsSide from "../../components/DashboardDetailsSide";
import { getJobsAction } from "../../features/jobs/asyncActions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { IJob } from "../../interfaces/Job";
import EmptyJobHolder from "../../components/EmptyJobHolder";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const jobs = useSelector<RootState, IJob[]>((state) => state.job.jobs);

  useEffect(() => {
    dispatch(getJobsAction());
  }, [dispatch]);

  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");

  return (
    <div className={styles.container}>
      <DashboardLeftBar
        jobs={jobs.map((job) => ({ title: job.title, jobId: job.jobId }))}
      />

      {jobs.length > 0 ? (
        <DashboardDetailsSide
          job={jobs.find((job) => job.jobId === jobId) || jobs[0]}
        />
      ) : (
        <EmptyJobHolder />
      )}
    </div>
  );
};

export default Dashboard;
