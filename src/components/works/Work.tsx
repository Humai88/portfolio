import Button from "../../UI/Button/Button";
import styles from "./Work.module.scss";

type WorkPropsType = {
  title: string;
  text: string;
  imgSrc: string;
};
export const Work: React.FC<WorkPropsType> = (props) => {
  const { title, text, imgSrc } = props;
  return (
    <div className={styles.card}>
      <div className={`${styles.face} ${styles.face1}`}>
        <div className={styles.content}>
          <img className={styles.img} src={imgSrc} />
          <h3>{title}</h3>
        </div>
      </div>
      <div className={`${styles.face} ${styles.face2}`}>
        <div className={styles.content}>
          <p>{text}</p>
          <a href="#">Open</a>
        </div>
      </div>
    </div>
  );
};
