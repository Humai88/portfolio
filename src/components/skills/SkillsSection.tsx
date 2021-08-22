import React from "react";
import { Skill } from "./Skill";
import styles from "./SkillsSection.module.scss";

import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";

export const SkillsSection = () => {
  return (
    <div id="skills" className={styles.wrapper}>
      <h2>My skills</h2>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <Skill
          title="TypeScript"
          img={<SiTypescript className={styles.icon} />}
        />
        <Skill title="HTML" img={<SiHtml5 className={styles.icon} />} />
        <Skill title="CSS" img={<SiCss3 className={styles.icon} />} />
      </div>
      <div className={styles.container}>
        <Skill title="React" img={<SiReact className={styles.icon} />} />
        <Skill title="Redux" img={<SiRedux className={styles.icon} />} />
        <Skill title="SASS" img={<FaSass className={styles.icon} />} />
      </div>
    </div>
  );
};
