import styles from "./Navigation.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
export const Navigation = () => {
  const [nav, setNav] = useState(false);
  const onChangeHandler = () => {
    setNav(!nav);
  };
  const hideNavbar = () => {
    setNav(false);
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.toggler}
        checked={nav}
        onChange={onChangeHandler}
      />
      <div className={styles.hamburger}>
        <div></div>
      </div>

      <div className={styles.menu}>
        <div>
          <div>
            <ul>
              <Link
                onClick={hideNavbar}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1100}
              >
                Home
              </Link>

              <Link
                onClick={hideNavbar}
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
              >
                Skills
              </Link>
              <Link
                onClick={hideNavbar}
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
              >
                Works
              </Link>
              <Link
                onClick={hideNavbar}
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={1100}
              >
                Contacts
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
