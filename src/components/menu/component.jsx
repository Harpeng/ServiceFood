import React from "react";
import { Dish } from "../dish/component";
import styles from "./styles.module.css"

export const Menu = ({menu}) => {

  return (
    <ul>
       {
        menu.map((item, id) => (
            <Dish className={styles.dish} name={item.name} key={id} />
        ))
       } 
    </ul>
  )
};