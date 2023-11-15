import { Button } from "../button/component";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/ui/cart";

export const Dish = ({increment, decrement, amount, dish, className}) => {
  const {theme} = useContext(ThemeContext);

  const dispatch = useDispatch();


  return (
    <li className={classNames(className, {[styles.darkThemeDish] : theme === "dark"})}>
      <p>{dish.name}</p>
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
