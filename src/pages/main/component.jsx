import React from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { AppHeader } from "../../components/app-header/component";
import { Footer } from "../../components/footer/component";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";
import { Outlet } from "react-router-dom";

export const Main = ({ restaurants, loading }) => {
  const [activeRestaurantId, setActiveRestaurantId] = React.useState();

  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={classNames(styles.page, { [styles.dark]: theme === "dark" })}
    >
      <AppHeader className={styles.header} />
      <main className={styles.content}>
        {loading ? (
          <h1 className={styles.loading}>Loading</h1>
        ) : (
          <RestaurantTabs
            state={activeRestaurantId}
            restaurants={restaurants}
            onClick={setActiveRestaurantId}
            className={styles.tabs}
          />
        )}
        <Outlet />
      </main>
      <Footer className={styles.footer} />
    </section>
  );
};
