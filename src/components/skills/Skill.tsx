import React from "react";
import styles from "./Skill.module.scss";

export const Skill = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src="" alt="" />
      </div>
      <h3 className={styles.header}>Header</h3>
      <p className={styles.descr}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
        magnam, fuga nesciunt possimus adipisci reprehenderit repellendus
        doloribus, quaerat corrupti ipsum repellat voluptates autem obcaecati,
        ratione totam. Corporis debitis mollitia velit.
      </p>
    </div>
  );
};
