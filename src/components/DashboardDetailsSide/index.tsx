import React, { useEffect } from "react";
import styles from "./style.module.scss";
import Chart from "react-apexcharts";
import { IJOB } from "../../features/jobs/jobsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getResponsesByIdAction } from "../../features/response/asyncActions";

interface IProps {
  job: IJOB;
}

interface IResponse {
  userId: string;
  jobId: string;
  date: string;
  expectedStatus: number;
  status: number;
  maxResponseTime: number;
  responseTime: number;
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

  if (responses.length === 0) {
    return <div>there is no response</div>;
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{job.title}</h4>
      <p className={styles.url}>{job.url}</p>

      <div className={styles.actionBtnGroup}>
        <button className={styles.actionBtn}>Pause</button>
        <button className={styles.actionBtn}>Edit</button>
        <button className={styles.actionDeleteBtn}>Delete</button>
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
            (responses[responses.length - 1].status ===
            responses[responses.length - 1].expectedStatus
              ? styles.success
              : styles.fail)
          }
        >
          {responses[responses.length - 1].status ===
          responses[responses.length - 1].expectedStatus
            ? "UP"
            : "DOWN"}
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
        <Chart
          options={{
            chart: {
              id: "responsetime",
            },
            xaxis: {
              categories: responses.map((response) =>
                new Date(response.date).toLocaleTimeString()
              ),
              range: 30,
            },
            yaxis: {
              max:
                Math.max.apply(
                  null,
                  responses.slice(-30).map((response) => response.responseTime)
                ) * 1.05,
            },
          }}
          series={[
            {
              name: "responsetime",
              data: responses.map((response) => response.responseTime),
            },
          ]}
          type="area"
          width="100%"
          height={"400"}
        />
      </div>
    </div>
  );
};

export default DashboardDetailsSide;
