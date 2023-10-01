import React from "react";
import { Restaurant } from "../restaurant/component";

export const RestaurantBlock = ({restaurant}) => {

  return (
    <>
            {
            restaurant  &&
                <Restaurant data={restaurant} />
        }
    </>
  );
};