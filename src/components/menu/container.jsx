import { Menu } from "./component";
import { useGetDishesQuery } from "../../redux/services/api";

export const MenuContainer = ({ restaurantId }) => {
  const { data } = useGetDishesQuery(restaurantId);

  return <Menu menu={data} />;
};
