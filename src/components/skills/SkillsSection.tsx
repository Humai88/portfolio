import { Skill } from "./Skill";
import styles from "./SkillsSection.module.scss";
import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiVisualstudiocode,
  SiPostman,
  SiStorybook,
} from "react-icons/si";
import { FaSass, FaYarn } from "react-icons/fa";
export const SkillsSection = () => {
  return (
    <div id="skills" className={styles.wrapper}>
      <h2>My skills</h2>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <Skill img={<SiJavascript className={styles.icon} />} />
        <Skill img={<SiTypescript className={styles.icon} />} />
        <Skill img={<SiHtml5 className={styles.icon} />} />
        <Skill img={<SiCss3 className={styles.icon} />} />
        <Skill img={<SiReact className={styles.icon} />} />
        <Skill img={<SiRedux className={styles.icon} />} />
        <Skill img={<SiGit className={styles.icon} />} />
        <Skill img={<FaSass className={styles.icon} />} />
      </div>
      <h2 className={styles.tools}>Tools I Use</h2>
      <div className={styles.line}></div>
      <div className={`${styles.container} ${styles.toolsWrapper}`}>
        <Skill img={<SiVisualstudiocode className={styles.icon} />} />
        <Skill img={<SiPostman className={styles.icon} />} />
        <Skill img={<SiStorybook className={styles.icon} />} />
        <Skill img={<FaYarn className={styles.icon} />} />
      </div>
    </div>
  );
};
