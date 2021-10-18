import styles from "./Work.module.scss";
import { FaCloud } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
type WorkPropsType = {
  title: string;
  text: string;
  imgSrc: string;
  ghLink: string;
  webLink: string;
};
export const Work: React.FC<WorkPropsType> = (props) => {
  const { title, text, imgSrc, ghLink, webLink } = props;
  return (
    <div className={styles.card}>
      <div className={`${styles.face} ${styles.face1}`}>
        <div className={styles.content}>
          <img className={styles.img} src={imgSrc} alt="projectPicture" />
          <h3>{title}</h3>
        </div>
      </div>
      <div className={`${styles.face} ${styles.face2}`}>
        <div className={styles.content}>
          <p>{text}</p>
          <div className={styles.linksWrapper}>
            <a href={ghLink} target="_blank" rel="noreferrer">
              <GoMarkGithub className={styles.icon} />
              GitHub
            </a>
            <a
              className={styles.btn}
              href={webLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaCloud /> Visit the Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
