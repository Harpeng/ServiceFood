import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";
import { TabContainer } from "../tab/container";
import { NavLink } from "react-router-dom";

export const RestaurantTabs = ({ state, onClick, className, restaurants }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ul
      className={classNames(className, styles.tabWrapper, {
        [styles.darkTabWrapper]: theme === "dark",
      })}
    >
      {restaurants.map((data) => (
        <NavLink
          key={data.id}
          to={data.id}
          className={({ isActive }) =>
            classNames(
              { [styles.active]: isActive && theme === "default" },
              { [styles.darkActive]: isActive  && theme === "dark" },
            )
          }
        >
          <TabContainer
            className={styles.tab}
            state={state}
            restaurantsName={data.name}
            onClick={() => onClick(data.id)}
          ></TabContainer>
        </NavLink>
      ))}
    </ul>
  );
};
