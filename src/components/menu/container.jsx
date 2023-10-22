import { useEffect } from "react";
import { Menu } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { getDishes } from "../../redux/entities/dishes/thunks/get-dishes";
import { selectRestarauntMenuById } from "../../redux/entities/restaraunts/selectors";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const restarauntMenu = useSelector((state) =>
    selectRestarauntMenuById(state, restaurantId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [restaurantId]);

  return <Menu menu={restarauntMenu} {...props} />;
};
