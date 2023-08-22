import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getResponsesByIdAction } from "../../features/response/asyncActions";
import {
  deleteJobAction,
  toggleJobActiveAction,
  updateJobAction,
} from "../../features/jobs/asyncActions";
import { IResponse } from "../../interfaces/Responce";
import { IJob } from "../../interfaces/Job";
import ResponseTimeChart from "../ResponseTimeChart";
import useModal from "../../Hooks/useModal";
import JobForm from "../JobForm";
import { IJobFormElements } from "../../interfaces/IJobFormElements";

interface IProps {
  job: IJob;
}

const DashboardDetailsSide = ({ job }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const responses = useSelector<RootState, IResponse[]>(
    (state) => state.response.responses
  );

  useEffect(() => {
    dispatch(getResponsesByIdAction({ jobId: job.jobId }));
    const interval = setInterval(() => {
      dispatch(getResponsesByIdAction({ jobId: job.jobId }));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, job.jobId]);

  const onJobEditHandle = (updatedJob: IJobFormElements) => {
    dispatch(updateJobAction({ ...updatedJob, jobId: job.jobId }));
  };

  const [, toggleEditModal, EditJobModal] = useModal(
    <JobForm
      onSubmit={onJobEditHandle}
      startJob={job}
      submitBtnTitle="Update Job"
    />
  );

  if (responses.length === 0) {
    return <div>there is no response</div>;
  }

  const toggleJobStatus: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(
      toggleJobActiveAction({ jobId: job.jobId, isActive: !job.isActive })
    );
  };

  const onDeleteJob: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(deleteJobAction({ jobId: job.jobId }));
  };

  return (
    <div className={styles.container}>
      {EditJobModal}
      <h4 className={styles.title}>{job.title}</h4>
      <p className={styles.url}>{job.url}</p>

      <div className={styles.actionBtnGroup}>
        <button className={styles.actionBtn} onClick={toggleJobStatus}>
          {job.isActive ? "Pause" : "Start"}
        </button>
        <button className={styles.actionBtn} onClick={toggleEditModal}>
          Edit
        </button>
        <button className={styles.actionDeleteBtn} onClick={onDeleteJob}>
          Delete
        </button>
      </div>

      <div className={styles.statusResponse}>
        {responses.slice(-30).map((response) => (
          <span
            key={response.date}
            className={
              response.status === response.expectedStatus
                ? styles.success
                : styles.fail
            }
            title={"statusCode: " + response.status}
          ></span>
        ))}

        <div
          className={
            styles.statusState +
            " " +
            (job.isActive ? styles.success : styles.fail)
          }
        >
          {job.isActive ? "UP" : "WAIT"}
        </div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statsBox}>
          <h3 className={styles.statsTitle}>Response</h3>
          <small className={styles.statsSmall}>(current)</small>
          <p className={styles.info}>
            {responses[responses.length - 1].responseTime} ms
          </p>
        </div>

        <div className={styles.statsBox}>
          <h3 className={styles.statsTitle}>Avg. Response</h3>
          <small className={styles.statsSmall}>(current)</small>
          <p className={styles.info}>
            {(
              responses.reduce(
                (acc, response) => acc + response.responseTime,
                0
              ) / responses.length
            ).toFixed()}
            ms
          </p>
        </div>
      </div>
      <div>
        <ResponseTimeChart
          responses={responses.map((response) => ({
            responseTime: response.responseTime,
            date: response.date,
          }))}
        />
      </div>
    </div>
  );
};

export default DashboardDetailsSide;
