import React from "react";
import { Button } from "../button/component";
import styles from "./styles.module.css";

export const Dish = ({ name }) => {
  const [count, setCount] = React.useState(0);

  return (
    <li className={styles.dishList}>
      <p>{name}</p>
      <div className={styles.countBlock}>
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
