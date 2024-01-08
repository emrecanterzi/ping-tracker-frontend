import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { Check } from "@phosphor-icons/react";
import { IJobFormElements } from "../../interfaces/IJobFormElements";
import ReactJson, { InteractionProps } from "react-json-view";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ITime } from "../../interfaces/ITimes";

interface IProps {
  onSubmit: (job: IJobFormElements) => void;
  startJob?: IJobFormElements;
  submitBtnTitle: string;
}

const JobForm = ({ onSubmit, startJob, submitBtnTitle }: IProps) => {
  const { times } = useSelector<RootState, { times: ITime[] }>(
    (state) => state.times
  );
  const [job, setJob] = useState<IJobFormElements>(
    startJob
      ? startJob
      : {
          title: "",
          url: "",
          expectedStatus: 200,
          maxResponseTime: 500,
          delay: "time_01",
          method: "GET",
          isActive: true,
          requestBody: {},
          requestHeaders: {},
        }
  );

  useEffect(() => {
    if (startJob?.title) setJob(startJob);
  }, [startJob]);

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(job);
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.type === "checkbox") {
      if (e.target?.checked)
        setJob({ ...job, [e.target.name]: e.target.checked });
    } else {
      setJob({ ...job, [e.target.name]: e.target.value });
    }
  };

  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setJob({ ...job, [e.target.name]: e.target.selectedOptions[0].value });
  };

  const onObjectChange = (e: InteractionProps, key: string) => {
    setJob({ ...job, [key]: e.updated_src });
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.formTitle}>
        {startJob ? "Edit Job" : "Create Job"}
      </h5>

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
          <select
            name="delay"
            id="delay"
            title="delay"
            className={styles.input}
            onChange={onSelectChange}
            value={job.delay}
          >
            {times.map((time) => (
              <option value={time.timeId} key={time.timeId}>
                {time.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="method" className={styles.label}>
            Method
          </label>
          <select
            name="method"
            id="method"
            title="method"
            className={styles.input}
            onChange={onSelectChange}
            value={job.method}
          >
            {["GET", "POST", "DELETE", "PUT", "PATCH"].map((method) => (
              <option value={method} key={method}>
                {method}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="requestBody" className={styles.label}>
            Request Body
          </label>
          <div className={styles.input}>
            <ReactJson
              name={null}
              src={job.requestBody || {}}
              onDelete={(e) => onObjectChange(e, "requestBody")}
              onEdit={(e) => onObjectChange(e, "requestBody")}
              onAdd={(e) => onObjectChange(e, "requestBody")}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="requestHeaders" className={styles.label}>
            Request Headers
          </label>
          <div className={styles.input}>
            <ReactJson
              name={null}
              src={job.requestHeaders || {}}
              onDelete={(e) => onObjectChange(e, "requestHeaders")}
              onEdit={(e) => onObjectChange(e, "requestHeaders")}
              onAdd={(e) => onObjectChange(e, "requestHeaders")}
            />
          </div>
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

        <button className={styles.submitBtn}>{submitBtnTitle}</button>
      </form>
    </div>
  );
};

export default JobForm;
