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
import { Fade } from "react-awesome-reveal";

export const SkillsSection = () => {
  return (
    <div id="skills" className={styles.wrapper}>
      <h2>My skills</h2>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <Fade duration={1500}>
          <Skill
            img={
              <SiJavascript
                style={{ color: "#FFC93C" }}
                className={styles.icon}
              />
            }
          />
          <Skill
            img={
              <SiTypescript
                style={{ color: "#2978B5" }}
                className={styles.icon}
              />
            }
          />
          <Skill
            img={
              <SiHtml5 style={{ color: "#FF4C29" }} className={styles.icon} />
            }
          />
          <Skill
            img={
              <SiCss3 style={{ color: "#3DB2FF" }} className={styles.icon} />
            }
          />
          <Skill
            img={
              <SiReact style={{ color: "#3EDBF0" }} className={styles.icon} />
            }
          />
          <Skill
            img={
              <SiRedux style={{ color: "#7952B3" }} className={styles.icon} />
            }
          />
          <Skill
            img={<SiGit style={{ color: "#DD2C00" }} className={styles.icon} />}
          />
          <Skill
            img={
              <FaSass style={{ color: "#E36BAE" }} className={styles.icon} />
            }
          />
        </Fade>
      </div>
      <h2 className={styles.tools}>Tools I Use</h2>
      <div className={styles.line}></div>
      <div className={`${styles.container} ${styles.toolsWrapper}`}>
        <Fade duration={2300}>
          <Skill
            img={
              <SiVisualstudiocode
                style={{ color: "#2978B5" }}
                className={styles.icon}
              />
            }
          />
          <Skill
            img={
              <SiPostman style={{ color: "#FF5722" }} className={styles.icon} />
            }
          />
          <Skill
            img={
              <SiStorybook
                style={{ color: "#FD6F96" }}
                className={styles.icon}
              />
            }
          />
          <Skill
            img={
              <FaYarn style={{ color: "#548CA8" }} className={styles.icon} />
            }
          />
        </Fade>
      </div>
    </div>
  );
};
