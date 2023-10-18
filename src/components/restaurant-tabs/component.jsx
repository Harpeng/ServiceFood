import React from "react";
import { Tab } from "../tab/component";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const RestaurantTabs = ({restaurantIds ,state, onClick, className}) => {
  const {theme} = useContext(ThemeContext);

  return (
      <ul className={classNames(className,styles.tabWrapper, {[styles.darkTabWrapper] : theme === "dark"})}>
        {restaurantIds.map((id) => (
        <Tab className={styles.tab} state={state} id={id} key={id} onClick={() => onClick(id)}></Tab>
      ))}
      </ul>
  );
};