import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const Footer = ({className}) => {
    const {theme} = useContext(ThemeContext);

  return (
    <div className={classNames(className,styles.footer, {[styles.darkTheme] : theme === "dark"})}>
    </div>
  );
};