import Button from "../../UI/Button/Button";
import styles from "./Work.module.scss";

export const Work = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <img src="" alt="" />
        <Button className={styles.btn}>Show</Button>
        <h3 className={styles.title}>Title</h3>
      </div>
    </div>
  );
};
