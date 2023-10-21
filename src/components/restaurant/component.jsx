import React from "react";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const Restaurant = ({restaurant, className}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={classNames(className)}>
        <h2 className={classNames(styles.name, {[styles.darkThemeName] : theme === "dark"})}>{restaurant.name}</h2>
        <Menu menu={restaurant.menu}/>
        <div className={styles.reviews}>
          <h3 className={classNames(styles.title, {[styles.darkThemeName] : theme === "dark"})}>Отзывы:</h3>
        <Reviews className={styles.reviews} reviews={restaurant.reviews} />
        </div>
    </div>
  );
};