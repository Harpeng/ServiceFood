import React from "react";
import { restaurants } from "../../constants/constants";
import { Restaurant } from "../../components/restaurant/component";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { RestaurantBlock } from "../../components/restaurant-block/component";

export const Main = () => {
    const [activeRestaurantName, setActiveRestaurantName] = React.useState(restaurants[0].id);
    const found = restaurants.find(({id}) => {
        return id === activeRestaurantName;
      });

  return (
    <section>
        <RestaurantTabs data={restaurants} onClick={setActiveRestaurantName}/>
        <RestaurantBlock restaurant={found} />
    </section>
  );
};
