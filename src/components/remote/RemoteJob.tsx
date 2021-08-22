import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./RemoteJob.module.scss";

export const RemoteJob = () => {
  return (
    <div className={styles.wrapper}>
      <h3>I Am Available For Remote Job</h3>
      <div className={styles.line}></div>
      <Button className={styles.btn}>Hire me</Button>
    </div>
  );
};
