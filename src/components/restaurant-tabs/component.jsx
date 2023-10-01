import React from "react";
import { Tab } from "../tab/component";

export const RestaurantTabs = ({data, onClick}) => {

  return (
      <ul style={{display: 'flex'}}>
        {data.map(({name, id}) => (
        <Tab value={name} key={id} onClick={() => onClick(id)}></Tab>
      ))}
      </ul>
  );
};