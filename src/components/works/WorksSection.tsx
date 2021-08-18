import React from "react";
import { Work } from "./Work";
import styles from "./WorksSection.module.scss";
export const WorksSection = () => {
  return (
    <div id="works" className={styles.wrapper}>
      <h2>My Works</h2>
      <div className={styles.container}>
        <Work />
        <Work />
        <Work />
      </div>
    </div>
  );
};
