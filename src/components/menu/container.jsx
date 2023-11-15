import { Menu } from "./component";
import { useSelector } from "react-redux";
import { getDishes } from "../../redux/entities/dishes/thunks/get-dishes";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUS } from "../../constants/statuses";
import { selectRestaurantMenuById } from "../../redux/entities/restaurants/selectors";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const restaurantMenu = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const dishLoadingStatus = useRequest(getDishes, restaurantId);

  if(dishLoadingStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>
  }

  return <Menu menu={restaurantMenu} {...props} />;
};
