import React from "react";
import { Skill } from "./Skill";
import styles from "./SkillsSection.module.scss";
export const SkillsSection = () => {
  return (
    <div id="skills" className={styles.wrapper}>
      <h2>My skills</h2>
      <div className={styles.container}>
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
};
