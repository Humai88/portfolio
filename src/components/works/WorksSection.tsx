import React from "react";
import { Work } from "./Work";
import styles from "./WorksSection.module.scss";
import todo from "./../../assets/img/icons8-checklist-64.png";
import blog from "./../../assets/img/icons8-google-blog-search-64.png";
import social from "./../../assets/img/icons8-social-network-64.png";

export const WorksSection = () => {
  return (
    <div id="works" className={styles.wrapper}>
      <h2>Projects</h2>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <Work
          title="Social Network"
          text="I prefer this to using template literals like @steven iseki suggested because it is easier to add and remove classes without having to wrap them in ${} every single time."
          imgSrc={social}
        />
        <Work
          title="Todolist"
          text="I prefer this to using template literals like @steven iseki suggested because it is easier to add and remove classes without having to wrap them in ${} every single time."
          imgSrc={todo}
        />
        <Work
          title="Blog"
          text="I prefer this to using template literals like @steven iseki suggested because it is easier to add and remove classes without having to wrap them in ${} every single time."
          imgSrc={blog}
        />
      </div>
    </div>
  );
};
