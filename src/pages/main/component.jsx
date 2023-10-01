import React from "react";
import { restaurants } from "../../constants/constants";
import { Tab } from "../../components/tab/component";
import { Restaurant } from "../../components/restaurant/component";

export const Main = () => {
    const [activeRestaurantName, setActiveRestaurantName] = React.useState(restaurants[0].id);
    const found = restaurants.find(({id}) => {
        return id === activeRestaurantName;
      });

  return (
    <section>
      <ul style={{display: 'flex'}}>
        {restaurants.map(({name, id}) => (
        <Tab value={name} key={id} onClick={() => setActiveRestaurantName(id)}></Tab>
      ))}
      </ul>
        {
            found  &&
                <Restaurant data={found} />
        }
    </section>
  );
};
