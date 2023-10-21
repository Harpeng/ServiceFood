import React from "react";
import { Dish } from "../dish/component";
import styles from "./styles.module.css"
import { DishContainer } from "../dish/container";

export const Menu = ({menu}) => {

  return (
    <ul>
       {
        menu.map((id) => (
            <DishContainer className={styles.dish} key={id} id={id} />
        ))
       } 
    </ul>
  )
};