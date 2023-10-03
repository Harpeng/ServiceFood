import React from "react";
import { restaurants } from "../../constants/constants";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { AppHeader } from "../../components/app-header/component";
import { Restaurant } from "../../components/restaurant/component";
import { Footer } from "../../components/footer/component";
import styles from "./styles.module.css";

export const Main = () => {
  const [activeRestaurantName, setActiveRestaurantName] = React.useState(
    restaurants[0].id
  );
  const findedRestaurant = restaurants.find(({ id }) => {
    return id === activeRestaurantName;
  });

  const handleClick = (id) => {
    setActiveRestaurantName(id);
    e.target.classList.contains("active") === true
      ? e.target.classList.remove("active")
      : e.target.classList.add("active");
  };

  return (
    <section className={styles.page}>
      <AppHeader className={styles.header} />
      <main className={styles.content}>
          <RestaurantTabs
            state={activeRestaurantName}
            restaurants={restaurants}
            onClick={setActiveRestaurantName}
          />
        {findedRestaurant && <Restaurant restaurant={findedRestaurant} />}
      </main>
      <Footer />
    </section>
  );
};
