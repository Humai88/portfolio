import React from "react";
import styles from "./Skill.module.scss";

type SkillPropsType = {
  title?: string;
  img: any;
};
export const Skill: React.FC<SkillPropsType> = (props) => {
  const { title, img } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <div className={styles.img}></div>
        {img}
      </div>
      <h3 className={styles.header}>{title}</h3>
    </div>
  );
};
