import { Button } from "../button/component";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const Dish = ({increment, decrement, amount, nameDish, className}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <li className={classNames(className, {[styles.darkThemeDish] : theme === "dark"})}>
      <p>{nameDish}</p>
      <div className={classNames(styles.countBlock, {[styles.darkThemeCount] : theme === "dark"})}>
        <Button
          title="-"
          onClick={decrement}
          disabled={amount === 0}
        ></Button>
        <p>{amount}</p>
        <Button
          title="+"
          onClick={increment}
          disabled={amount === 5}
        ></Button>
      </div>
    </li>
  );
};
