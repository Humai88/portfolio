import React from "react";
import { Work } from "./Work";
import styles from "./WorksSection.module.scss";
import { GrBlog } from "react-icons/gr";

export const WorksSection = () => {
  return (
    <div id="works" className={styles.wrapper}>
      <h2>Projects</h2>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <Work
          title="Social Network"
          text="I prefer this to using template literals like @steven iseki suggested because it is easier to add and remove classes without having to wrap them in ${} every single time."
          imgSrc={""}
        />
        <Work
          title="Todolist"
          text="I prefer this to using template literals like @steven iseki suggested because it is easier to add and remove classes without having to wrap them in ${} every single time."
          imgSrc={""}
        />
        <Work
          title="Blog"
          text="I prefer this to using template literals like @steven iseki suggested because it is easier to add and remove classes without having to wrap them in ${} every single time."
          imgSrc={""}
        />
      </div>
    </div>
  );
};
