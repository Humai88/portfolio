import React from "react";
import styles from "./Skill.module.scss";

type SkillPropsType = {
  title: string;
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
      {/* <p className={styles.descr}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
        magnam, fuga nesciunt possimus adipisci reprehenderit repellendus
        doloribus, quaerat corrupti ipsum repellat voluptates autem obcaecati,
        ratione totam. Corporis debitis mollitia velit.
      </p> */}
    </div>
  );
};
