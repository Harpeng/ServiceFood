import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "../button/button";

export const Dish = ({ name }) => {
    const [amount, setAmount] = React.useState(0);
    console.log({name})
  return (
    <li style={{display: 'flex'}}>
        {name} -
        <div style={{display: 'flex'}}>
            <Button title='-' disabled={amount === 0} onClick={() => setAmount(amount - 1)}/>
            {amount}
            <Button title='+' disabled={amount === 5} onClick={() => setAmount(amount + 1)}/>
        </div>
    </li>
  );
};