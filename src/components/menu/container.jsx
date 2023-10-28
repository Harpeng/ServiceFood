import { Menu } from "./component";
import { useSelector } from "react-redux";
import { getDishes } from "../../redux/entities/dishes/thunks/get-dishes";
import { selectRestarauntMenuById } from "../../redux/entities/restaraunts/selectors";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUS } from "../../constants/statuses";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const restarauntMenu = useSelector((state) =>
    selectRestarauntMenuById(state, restaurantId)
  );

  const dishLoadingStatus = useRequest(getDishes, restaurantId);

  if(dishLoadingStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>
  }

  return <Menu menu={restarauntMenu} {...props} />;
};
