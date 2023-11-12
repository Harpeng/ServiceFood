import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";
import { TabContainer } from "../tab/container";

export const RestaurantTabs = ({restaurantIds ,state, onClick, className}) => {
  const {theme} = useContext(ThemeContext);

  console.log(restaurantIds)

  return (
      <ul className={classNames(className,styles.tabWrapper, {[styles.darkTabWrapper] : theme === "dark"})}>
        {restaurantIds.map((id) => (
        <TabContainer  className={styles.tab} state={id === state} id={id} key={id} onClick={() => onClick(id)}></TabContainer>
      ))}
      </ul>
  );
};