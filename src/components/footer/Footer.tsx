import styles from "./Footer.module.scss";
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Gumay</h3>
        <div className={styles.links}>
          <a href="l">Linkedin</a>
          <a href="i">Instagram</a>
          <a href="f">Facebook</a>
        </div>
        <p>Copyright</p>
      </div>
    </div>
  );
};
