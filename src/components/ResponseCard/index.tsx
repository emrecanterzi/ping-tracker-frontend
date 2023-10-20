import React from "react";
import { IResponse } from "../../interfaces/Responce";
import styles from "./style.module.scss";

interface IProps {
  response: IResponse;
}

const ResponseCard = ({ response }: IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
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

      <i className="bi bi-arrow-down-short" />
    </div>
  );
};

export default ResponseCard;
