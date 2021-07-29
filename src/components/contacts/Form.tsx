import React from "react";

import styles from "./Form.module.scss";

export const Form = () => {
  return (
    <form action="" className={styles.form}>
      <input placeholder="Name" />
      <input placeholder="E-mail" />
      <textarea name="" placeholder="Your message"></textarea>
    </form>
  );
};
