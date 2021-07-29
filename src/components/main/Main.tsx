import React from "react";
import styles from "./Main.module.scss";
export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.descrWrapper}>
          <p className={styles.subheader}>Hi there</p>
          <h1>I am Gumay</h1>
          <p className={styles.descr}>A React Developer</p>
        </div>
        <div className={styles.img}></div>
      </div>
    </div>
  );
};
