import { useSelector } from "react-redux";
import { Restaurant } from "./component";
import { selectRestarauntsById } from "../../redux/entities/restaraunts/selectors";

export const RestaurantContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestarauntsById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return <Restaurant {...props} restaurant={restaurant} />;
};
