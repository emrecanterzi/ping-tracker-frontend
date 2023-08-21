import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import useModal from "../../Hooks/useModal";
import CreateJobForm from "../CreateJobForm";

interface IProps {
  jobs: {
    jobId: string;
    title: string;
  }[];
}

const DashboardLeftBar = ({ jobs }: IProps) => {
  const [isCreateJobFormModalOpen, toggleCreateJobFormModal, content] =
    useModal(<CreateJobForm />);

  return (
    <div className={styles.container}>
      {content}
      {jobs.map((job) => (
        <Link to={`?jobId=${job.jobId}`}>
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
