import React from "react";
import styles from "./style.module.scss";
import Chart from "react-apexcharts";

interface IProps {
  jobId: string | null;
}

const data = {
  userId: "1691064404715",
  jobId: "1691399623749",
  title: "FooderGood.com",
  url: "https://foodergood.com",
  expectedStatus: 200,
  maxResponseTime: 500,
  delay: "3_SEC",
  method: "GET",
  isActive: true,
  isDeleted: false,
  _id: "64d0b5c79eed33f8928cc68a",
  __v: 0,
};

const responseStatus = [
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:30:40.572Z",
    expectedStatus: 200,
    status: 300,
    maxResponseTime: 500,
    responseTime: 303,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:31:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 250,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:32:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 186,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:33:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 320,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:34:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 225,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:35:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 230,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:36:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 226,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:37:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 224,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:38:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 228,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:39:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 321,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:40:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 153,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:41:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 365,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:42:40.572Z",
    expectedStatus: 200,
    status: 500,
    maxResponseTime: 500,
    responseTime: 234,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:43:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 357,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:44:40.572Z",
    expectedStatus: 200,
    status: 400,
    maxResponseTime: 500,
    responseTime: 168,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:45:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 234,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:46:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 324,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:47:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 234,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:48:40.572Z",
    expectedStatus: 200,
    status: 202,
    maxResponseTime: 500,
    responseTime: 243,
    __v: 0,
  },
  {
    _id: "64d1fe98296d4afb3e432de7",
    userId: "1691064404715",
    jobId: "1691483762965",
    date: "2023-08-08T08:49:40.572Z",
    expectedStatus: 200,
    status: 200,
    maxResponseTime: 500,
    responseTime: 230,
    __v: 0,
  },
];

const DashboardDetailsSide = ({ jobId }: IProps) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{data.title}</h4>
      <p className={styles.url}>{data.url}</p>

      <div className={styles.actionBtnGroup}>
        <button className={styles.actionBtn}>Pause</button>
        <button className={styles.actionBtn}>Edit</button>
        <button className={styles.actionDeleteBtn}>Delete</button>
      </div>

      <div className={styles.statusResponse}>
        {responseStatus.map((response) => (
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
            (responseStatus[responseStatus.length - 1].status ===
            responseStatus[responseStatus.length - 1].expectedStatus
              ? styles.success
              : styles.fail)
          }
        >
          {responseStatus[responseStatus.length - 1].status ===
          responseStatus[responseStatus.length - 1].expectedStatus
            ? "UP"
            : "DOWN"}
        </div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statsBox}>
          <h3 className={styles.statsTitle}>Response</h3>
          <small className={styles.statsSmall}>(current)</small>
          <p className={styles.info}>
            {responseStatus[responseStatus.length - 1].responseTime} ms
          </p>
        </div>

        <div className={styles.statsBox}>
          <h3 className={styles.statsTitle}>Avg. Response</h3>
          <small className={styles.statsSmall}>(current)</small>
          <p className={styles.info}>
            {responseStatus.reduce(
              (acc, response) => acc + response.responseTime,
              0
            ) / responseStatus.length}
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
              categories: responseStatus.map((response) =>
                new Date(response.date).toLocaleTimeString()
              ),
            },
          }}
          series={[
            {
              name: "responsetime",
              data: responseStatus.map((response) => response.responseTime),
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
