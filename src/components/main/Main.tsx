import styles from "./Main.module.scss";
// import myPhoto from "./../../assets/img/photo_2021-08-31_00-35-04.jpg";
import myPhoto from "./../../assets/img/photo_2021-09-15_20-33-22.jpg";
import { TypeWriter } from "./TypingWriter";
import { useStickyState } from "../../localStorage";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useState } from "react";
import { ImDroplet } from "react-icons/im";

export const Main = () => {
  let msgs = [
    "A React Developer.",
    "This is my website.",
    "I am at your service.",
  ];
  const [theme, setTheme] = useStickyState<string>("#ff6b6b", "theme");
  const [toggle, setToggle] = useState(false);
  document.documentElement.style.setProperty("--toggle-color", theme);

  return (
    <div id="home" className={styles.wrapper}>
      <div
        className={styles.sidebarToggler}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <IoColorPaletteOutline />
      </div>

      {toggle ? (
        <div className={styles.sidebar}>
          <div
            className={styles.yellow}
            onClick={() => {
              setTheme("#ddb247");
              setToggle(false);
            }}
          >
            <ImDroplet />
          </div>
          <div
            className={styles.blue}
            onClick={() => {
              setTheme("#2978B5");
              setToggle(false);
            }}
          >
            <ImDroplet />
          </div>
          <div
            className={styles.teal}
            onClick={() => {
              setTheme("#368B85");
              setToggle(false);
            }}
          >
            <ImDroplet />
          </div>
          <div
            className={styles.purple}
            onClick={() => {
              setTheme("#7952B3");
              setToggle(false);
            }}
          >
            <ImDroplet />
          </div>

          <div
            className={styles.peach}
            onClick={() => {
              setTheme("#F08A5D");
              setToggle(false);
            }}
          >
            <ImDroplet />
          </div>
        </div>
      ) : null}
      <ul
        className={styles.circles}
        onClick={() => {
          setToggle(false);
        }}
      >
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
