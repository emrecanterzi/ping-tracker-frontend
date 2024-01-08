import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import useModal from "../../Hooks/useModal";
import JobForm from "../JobForm";
import { createJobAction } from "../../features/jobs/asyncActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { IJobFormElements } from "../../interfaces/IJobFormElements";

interface IProps {
  jobs: {
    jobId: string;
    title: string;
  }[];
}

const DashboardLeftBar = ({ jobs }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [, toggleCreateJobFormModal, content] = useModal(
    <JobForm onSubmit={onJobCreateHandler} submitBtnTitle="Create Job" />
  );

  function onJobCreateHandler(job: IJobFormElements) {
    dispatch(createJobAction(job));
    toggleCreateJobFormModal();
  }

  return (
    <div className={styles.container}>
      {content}
      {jobs.map((job) => (
        <Link to={`?jobId=${job.jobId}`} key={job.jobId}>
          <div className={styles.linkBtn}>{job.title}</div>
        </Link>
      ))}

      <button
        className={styles.createJobBtn}
        onClick={toggleCreateJobFormModal}
      >
        + Create new job
      </button>
    </div>
  );
};

export default DashboardLeftBar;
