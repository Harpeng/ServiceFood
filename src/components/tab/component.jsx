import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const Tab = ({ onClick, className, restaurantsName }) => {
  const {theme} = useContext(ThemeContext);


  return (
    <button
      className={classNames(className, styles.button, {[styles.darkButton] : (theme === "dark")} )} 
      type="button"
      onClick={onClick}
    >
      {restaurantsName}
    </button>
  );
};
