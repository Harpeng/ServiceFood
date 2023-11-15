import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const Button = ({title, onClick, disabled}) => {
  const {theme} = useContext(ThemeContext);

  return (
        <button className={classNames(styles.button, {[styles.darkTheme] : theme === "dark"})} type='button' onClick={onClick} disabled={disabled}>{title}</button>
  )
};