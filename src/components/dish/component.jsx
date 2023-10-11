import React from "react";
import { Button } from "../button/component";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const Dish = ({ name, className}) => {
  const [count, setCount] = React.useState(0);
  const {theme} = useContext(ThemeContext);

  return (
    <li className={classNames(className, {[styles.darkThemeDish] : theme === "dark"})}>
      <p>{name}</p>
      <div className={classNames(styles.countBlock, {[styles.darkThemeCount] : theme === "dark"})}>
        <Button
          title="-"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        ></Button>
        <p>{count}</p>
        <Button
          title="+"
          onClick={() => setCount(count + 1)}
          disabled={count === 5}
        ></Button>
      </div>
    </li>
  );
};
