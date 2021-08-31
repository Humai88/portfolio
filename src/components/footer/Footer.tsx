import styles from "./Footer.module.scss";
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Gumay</h3>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/gumay-vierdiyeva-296949215/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/gumay88/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/gumay.verdiyeva/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <p>Copyright</p>
      </div>
    </div>
  );
};
