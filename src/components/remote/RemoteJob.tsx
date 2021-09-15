import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./RemoteJob.module.scss";

export const RemoteJob = () => {
  return (
    <div className={styles.wrapper}>
      <h3>I Am Available For Remote Job</h3>
      <div className={styles.line}></div>
      <a
        href="https://www.linkedin.com/in/gumay-vierdiyeva-296949215/"
        target="_blank"
        rel="noreferrer"
      >
        <Button className={styles.btn}>hire me</Button>
      </a>
    </div>
  );
};
