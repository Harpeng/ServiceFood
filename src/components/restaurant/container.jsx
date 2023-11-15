import { useSelector } from "react-redux";
import { Restaurant } from "./component";
import { selectRestaurantsById } from "../../redux/entities/restaurants/selectors";

export const RestaurantContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantsById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }


  return <Restaurant {...props} restaurant={restaurant} />;
};
