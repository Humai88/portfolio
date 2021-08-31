import React from "react";
import { ContactForm } from "./Form";
import styles from "./Contacts.module.scss";
import Button from "../../UI/Button/Button";

export const Contacts = () => {
  return (
    <div id="contacts" className={styles.wrapper}>
      <h2>Contact</h2>
      <div className={styles.line}></div>
      <ContactForm />
    </div>
  );
};
