import React from "react";
import ReactDOM from "react-dom/client";
import { Dish } from "../../dish/component";


export const Menu = ({ menu }) => {
    console.log({menu})
  return (
    <ul>
        {
            menu.map((item, id) => (
                <Dish key={id} name={item.name} />
            ))
        }
    </ul>
  );
};
