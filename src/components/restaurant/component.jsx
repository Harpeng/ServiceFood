import React from "react";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css"

export const Restaurant = ({restaurant}) => {

  return (
    <div className={styles.restaurant}>
        <h2 className={styles.name}>{restaurant.name}</h2>
        <Menu menu={restaurant.menu}/>
        <div className={styles.reviews}>
          <h3 className={styles.title}>Отзывы:</h3>
        <Reviews reviews={restaurant.reviews} />
        </div>
    </div>
  );
};