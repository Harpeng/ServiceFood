import React from "react";
import { Button } from "../button/component";

export const Dish = ({name}) => {
    const [count, setCount] = React.useState(0)

  return (
    <li style={{display: 'flex'}}>
        {name}-
        <Button title = '-' onClick={() => setCount(count -1)} disabled={count === 0}></Button>
        {count}
        <Button title = '+' onClick={() => setCount(count +1)} disabled={count === 5}></Button>
    </li>
  )
};