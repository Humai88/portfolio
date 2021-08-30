import styles from "./Main.module.scss";
import myPhoto from "./../../assets/img/photo_2021-08-31_00-35-04.jpg";
import { TypeWriter } from "./TypingWriter";

export const Main = () => {
  let msgs = [
    "A React Developer.",
    "This is my website.",
    "I am at your service.",
  ];

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
          <TypeWriter messages={msgs} />
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
