import { Navigation } from "./Navigation";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
    </div>
  );
};
