import React from "react";
import { Button } from "../button/component";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";
import { selectDishesById } from "../../redux/entities/dishes/selectors";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Dish = ({id, className}) => {
  const [count, setCount] = React.useState(0);
  const {theme} = useContext(ThemeContext);
  const dish = useSelector((state) => selectDishesById(state, id));


  return (
    <li className={classNames(className, {[styles.darkThemeDish] : theme === "dark"})}>
      <p>{dish.name}</p>
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
