import { useSelector } from "react-redux";
import { Restaurant } from "./component";
import { selectRestarauntsById } from "../../redux/entities/restaraunts/selectors";

export const RestaurantContainer = ({ activeRestaraunt, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestarauntsById(state, activeRestaraunt)
  );

  if (!restaurant) {
    return null;
  }

  return <Restaurant {...props} restaurant={restaurant} />;
};
