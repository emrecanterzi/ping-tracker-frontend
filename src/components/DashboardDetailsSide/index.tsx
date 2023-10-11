import React, { useEffect, useRef, useState, useCallback } from "react";
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
import JobForm from "../JobForm";
import { IJobFormElements } from "../../interfaces/IJobFormElements";
import ResponseStats from "../ResponseStats";
import { useSocket } from "../../Hooks/useSocket";
import { addResponse } from "../../features/response/responseSlice";

interface IProps {
  job: IJob;
}

const DashboardDetailsSide = ({ job }: IProps) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const responses = useSelector<RootState, IResponse[]>(
    (state) => state.response.responses
  );
  const [socket] = useSocket();

  const onUpdate = useCallback(
    (data: IResponse) => {
      console.log(data.jobId);
      if (data.jobId === job.jobId) {
        dispatch(addResponse(data));
      }
    },
    [dispatch, job.jobId]
  );

  useEffect(() => {
    dispatch(getResponsesByIdAction({ jobId: job.jobId }));

    socket?.on("update", onUpdate);

    return () => {
      socket?.off("update", onUpdate);
    };
  }, [dispatch, job.jobId, onUpdate, socket]);

  function onJobEditHandle(updatedJob: IJobFormElements) {
    dispatch(updateJobAction({ ...updatedJob, jobId: job.jobId }));
  }

  const toggleJobStatus: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(
      toggleJobActiveAction({ jobId: job.jobId, isActive: !job.isActive })
    );
  };

  const onDeleteJob: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(deleteJobAction({ jobId: job.jobId }));
  };

  const [isFormOpen, setFormOpen] = useState(false);

  const onEdit = () => {
    setFormOpen((isFormOpen) => !isFormOpen);
  };

  return (
    <div
      className={[styles.container, isFormOpen ? styles.active : null].join(
        " "
      )}
      ref={containerRef}
    >
      <div>
        <h4 className={styles.title}>{job.title}</h4>
        <p className={styles.url}>{job.url}</p>

        <div className={styles.actionBtnGroup}>
          <button className={styles.actionBtn} onClick={toggleJobStatus}>
            {job.isActive ? "Pause" : "Start"}
          </button>
          <button className={styles.actionBtn} onClick={onEdit}>
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

        <ResponseStats
          responseTime={
            responses.length > 0
              ? responses[responses.length - 1].responseTime
              : NaN
          }
          responseTimeAvg={
            responses.length > 0
              ? (
                  responses.reduce(
                    (acc, response) => acc + response.responseTime,
                    0
                  ) / responses.length
                ).toFixed()
              : NaN
          }
        />
        <div>
          <ResponseTimeChart
            responses={responses.map((response) => ({
              responseTime: response.responseTime,
              date: response.date,
            }))}
          />
        </div>
      </div>
      <div
        className={[
          styles.formContainer,
          isFormOpen ? styles.active : null,
        ].join(" ")}
      >
        <JobForm
          onSubmit={onJobEditHandle}
          startJob={job}
          submitBtnTitle="Update Job"
        />
      </div>
    </div>
  );
};

export default DashboardDetailsSide;
