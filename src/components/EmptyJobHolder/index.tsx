import React from "react";
import styles from "./style.module.scss";
import sandWatch from "../../assets/sand-watch.svg";

const EmptyJobHolder = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>We Are Waiting Your Order</h4>
      <p className={styles.desc}>select or create a new job to see responses</p>
      <img className={styles.img} alt="sand watch" src={sandWatch} />
    </div>
  );
};

export default EmptyJobHolder;
