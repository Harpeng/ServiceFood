import React from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { AppHeader } from "../../components/app-header/component";
import { Footer } from "../../components/footer/component";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";
import { RestaurantContainer } from "../../components/restaurant/container";
import { useEffect } from "react";

export const Main = ({ restaurantIds, loading }) => {
  const [activeRestaurantId, setActiveRestaurantId] = React.useState();

  useEffect(() => {
    if (restaurantIds?.length ) {
      setActiveRestaurantId(restaurantIds[0]);
    }
  }, [restaurantIds, loading]);

  const findedRestaurant = restaurantIds.find((id) => {
    return id === activeRestaurantId;
  });

  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={classNames(styles.page, { [styles.dark]: theme === "dark" })}
    >
        <AppHeader className={styles.header} />
        <main className={styles.content}>
          <RestaurantTabs
            state={activeRestaurantId}
            restaurantIds={restaurantIds}
            onClick={setActiveRestaurantId}
            className={styles.tabs}
          />
          {findedRestaurant && (
            <RestaurantContainer
              className={styles.restaurant}
              restaurantId={findedRestaurant}
            />
          )}
        </main>
        <Footer className={styles.footer} />
    </section>
  );
};
