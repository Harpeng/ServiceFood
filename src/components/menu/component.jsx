import React from "react";
import { Dish } from "../dish/component";
import styles from "./styles.module.css"

export const Menu = ({menu}) => {

  console.log(menu)
  return (
    <ul>
       {
        menu.map((id) => (
            <Dish className={styles.dish} key={id} id={id} />
        ))
       } 
    </ul>
  )
};