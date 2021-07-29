import styles from "./Navigation.module.scss";
export const Navigation = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navLinks}>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="skills">Skills</a>
        </li>
        <li>
          <a href="works">Works</a>
        </li>
        <li>
          <a href="contacts">Contacts</a>
        </li>
      </ul>
    </div>
  );
};
