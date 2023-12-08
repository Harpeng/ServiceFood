import { useGetRestaurantsQuery } from "../../redux/services/api";
import { Main } from "./component";

export const MainContainer = () => {
  const { data, isFetching } = useGetRestaurantsQuery();

  return (
        <Main restaurants={data} loading={isFetching} />
  );
};
