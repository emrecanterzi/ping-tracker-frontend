import React, { useState } from "react";
import styles from "./style.module.scss";
import { Check } from "@phosphor-icons/react";
import { IJobFormElements } from "../../interfaces/IJobFormElements";

interface IProps {
  onSubmit: (job: IJobFormElements) => void;
}

const CreateJobForm = ({ onSubmit }: IProps) => {
  const [job, setJob] = useState<IJobFormElements>({
    title: "",
    url: "",
    expectedStatus: 200,
    maxResponseTime: 500,
    delay: "3_SEC",
    method: "",
    isActive: true,
  });

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(job);
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.type === "checkbox") {
      setJob({ ...job, [e.target.name]: e.target.checked });
    } else {
      setJob({ ...job, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={job.title}
            onChange={onChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="url" className={styles.label}>
            Url
          </label>
          <input
            type="url"
            name="url"
            id="url"
            value={job.url}
            onChange={onChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="expectedStatus" className={styles.label}>
            Expected Status
          </label>
          <input
            type="number"
            name="expectedStatus"
            id="expectedStatus"
            value={job.expectedStatus}
            onChange={onChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="maxResponseTime" className={styles.label}>
            Maximum Response Time
          </label>
          <input
            type="number"
            name="maxResponseTime"
            id="maxResponseTime"
            value={job.maxResponseTime}
            onChange={onChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="delay" className={styles.label}>
            Delay
          </label>
          <input
            type="text"
            name="delay"
            id="delay"
            value={job.delay}
            onChange={onChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="method" className={styles.label}>
            Method
          </label>
          <input
            type="text"
            name="method"
            id="method"
            value={job.method}
            onChange={onChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="isActive" className={styles.label}>
            <input
              type="checkbox"
              name="isActive"
              id="isActive"
              checked={job.isActive}
              onChange={onChange}
              className={styles.input}
            />
            <span className={styles.checkboxShowcase}>
              <Check weight={"bold"} />
            </span>
            Is Active
          </label>
        </div>

        <button className={styles.submitBtn}>Create Job</button>
      </form>
    </div>
  );
};

export default CreateJobForm;
