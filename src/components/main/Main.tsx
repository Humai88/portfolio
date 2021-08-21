import styles from "./Main.module.scss";
import myPhoto from "./../../assets/img/Lumii_20210818_134947399.jpg";

export const Main = () => {
  return (
    <div id="home" className={styles.wrapper}>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className={styles.container}>
        <div className={styles.descrWrapper}>
          <p className={styles.subheader}>Hi there</p>
          <h1>I am Gumay</h1>
          <div className={styles.underline}></div>
          <p className={styles.descr}>A React Developer.</p>
        </div>

        <div className={styles.wrapImage}>
          <div className={styles.imgHover}>
            <img src={myPhoto} className={styles.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
