import React from "react";
import { restaurants } from "../../constants/mock";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { AppHeader } from "../../components/app-header/component";
import { Restaurant } from "../../components/restaurant/component";
import { Footer } from "../../components/footer/component";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";
import { useSelector  } from "react-redux/es/hooks/useSelector";
import { selectRestarauntsId } from "../../redux/entities/restaraunts/selectors";

export const Main = () => {
  const restaurantIds = useSelector((state) => selectRestarauntsId(state));
  
  const [activeRestaurantId, setActiveRestaurantId] = React.useState(
    restaurantIds[0]
  );
  const findedRestaurant = restaurantIds.find(( id ) => {
    return id === activeRestaurantId;
  });
  const {theme} = useContext(ThemeContext)

  console.log(findedRestaurant)

  return (
    <section className={classNames(styles.page, {[styles.dark] : theme === "dark"})}>
      <AppHeader className={styles.header} />
      <main className={styles.content}>
          <RestaurantTabs
            state={activeRestaurantId}
            restaurantIds={restaurantIds}
            onClick={setActiveRestaurantId}
            className={styles.tabs}
          />
        {findedRestaurant && <Restaurant className={styles.restaurant} activeRestaraunt={findedRestaurant} />}
      </main>
      <Footer className={styles.footer} />
    </section>
  );
};
