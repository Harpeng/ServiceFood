import styles from "./styles.module.css";
import { Toggle } from "../toggle/component";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const AppHeader = ({className}) => {
    const {toggleTheme} = useContext(ThemeContext);
    const {theme} = useContext(ThemeContext);

  return (
    <header className={classNames(className, styles.headerBlock, {[styles.dark] : theme === "dark"})} >
      <h1 className={classNames(styles.title, {[styles.darkTitle] : theme === "dark"})}>FoodService</h1>
      <div className={styles.switcher}>
        <Toggle className={styles.toggle} onClick={toggleTheme} />
      </div>
    </header>
  );
};
