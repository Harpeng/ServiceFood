import React from "react";
import { Dish } from "../dish/dish";

export const Menu = ({menu}) => {

  return (
    <ul>
       {
        menu.map((item, id) => (
            <Dish name={item.name} key={id} />
        ))
       } 
    </ul>
  )
};