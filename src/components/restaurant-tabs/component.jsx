import React from "react";
import { Tab } from "../tab/component";
import styles from "./styles.module.css";

export const RestaurantTabs = ({restaurants,state, onClick}) => {
console.log({state})
  return (
      <ul className={styles.tabWrapper}>
        {restaurants.map(({name, id}) => (
        <Tab state={state} value={name} id={id} key={id} onClick={() => onClick(id)}></Tab>
      ))}
      </ul>
  );
};