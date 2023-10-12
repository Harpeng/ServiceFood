import React from "react";
import { restaurants } from "../../constants/constants";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { AppHeader } from "../../components/app-header/component";
import { Restaurant } from "../../components/restaurant/component";
import { Footer } from "../../components/footer/component";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const Main = () => {
  const [activeRestaurantId, setActiveRestaurantId] = React.useState(
    restaurants[0].id
  );
  const findedRestaurant = restaurants.find(({ id }) => {
    return id === activeRestaurantId;
  });
  const {theme} = useContext(ThemeContext)

  return (
    <section className={classNames(styles.page, {[styles.dark] : theme === "dark"})}>
      <AppHeader className={styles.header} />
      <main className={styles.content}>
          <RestaurantTabs
            state={activeRestaurantId}
            restaurants={restaurants}
            onClick={setActiveRestaurantId}
            className={styles.tabs}
          />
        {findedRestaurant && <Restaurant className={styles.restaurant} restaurant={findedRestaurant} />}
      </main>
      <Footer className={styles.footer} />
    </section>
  );
};
