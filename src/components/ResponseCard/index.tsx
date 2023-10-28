import React from "react";
import { IResponse } from "../../interfaces/Responce";
import styles from "./style.module.scss";
import ReactJson from "react-json-view";

interface IProps {
  response: IResponse;
}

const ResponseCard = ({ response }: IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.status}>
          <span
            className={
              styles.statusState +
              " " +
              (response.expectedStatus === response.status
                ? styles.success
                : styles.fail)
            }
          ></span>
          {response.status}
        </div>
        <span>{new Date(response.date).toLocaleString()}</span>
      </div>
      <div className={styles.collapse}>
        <div>
          <ReactJson
            name={"Response Body"}
            src={response.responseBody || {}}
            collapsed={true}
          />
        </div>
        <div>
          <ReactJson
            name={"Response Headers"}
            src={response.responseHeaders || {}}
            collapsed={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ResponseCard;
