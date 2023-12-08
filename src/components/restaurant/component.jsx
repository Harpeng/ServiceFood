import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";
import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";

export const Restaurant = ({restaurant, className}) => {
  const {theme} = useContext(ThemeContext);


  return (
    <div className={classNames(className)}>
        <h2 className={classNames(styles.name, {[styles.darkThemeName] : theme === "dark"})}>{restaurant.name}</h2>
        <MenuContainer restaurantId={restaurant.id}/>
        <div className={styles.reviews}>
          <h3 className={classNames(styles.title, {[styles.darkThemeName] : theme === "dark"})}>Отзывы:</h3>
        <ReviewsContainer className={styles.reviews} restaurantId={restaurant.id} />
        </div>
    </div>
  );
};