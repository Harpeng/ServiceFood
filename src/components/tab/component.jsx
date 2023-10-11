import React from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const Tab = ({ onClick, value, state, id, className }) => {
  const {theme} = useContext(ThemeContext);

  return (
    <button
      className={classNames(className, styles.button, {[styles.active] : id === state && theme === "default"}, {[styles.darkActive]: id === state && theme === "dark"}, {[styles.darkButton] : (theme === "dark")} )} 
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
