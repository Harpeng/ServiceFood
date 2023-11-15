import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const Tab = ({ onClick, state, id, className, restaurant }) => {
  const {theme} = useContext(ThemeContext);

  return (
    <button
      className={classNames(className, styles.button, {[styles.active] : id === state && theme === "default"}, {[styles.darkActive]: id === state && theme === "dark"}, {[styles.darkButton] : (theme === "dark")} )} 
      type="button"
      onClick={onClick}
    >
      {restaurant.name}
    </button>
  );
};
