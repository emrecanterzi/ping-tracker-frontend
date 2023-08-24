import React from "react";
import styles from "./style.module.scss";

interface IProps {
  responseTime: number | string;
  responseTimeAvg: number | string;
}

const ResponseStats = ({ responseTime, responseTimeAvg }: IProps) => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsBox}>
        <h3 className={styles.statsTitle}>Response</h3>
        <small className={styles.statsSmall}>(current)</small>
        <p className={styles.info}>
          {responseTime ? responseTime + " ms" : "there is no response"}
        </p>
      </div>

      <div className={styles.statsBox}>
        <h3 className={styles.statsTitle}>Avg. Response</h3>
        <small className={styles.statsSmall}>(last day)</small>
        <p className={styles.info}>
          {responseTimeAvg ? responseTimeAvg + " ms" : "there is no response"}
        </p>
      </div>
    </div>
  );
};

export default ResponseStats;
