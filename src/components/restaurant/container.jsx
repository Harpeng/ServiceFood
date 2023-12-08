import { Restaurant } from "./component";
import { useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();
  const {data: restaurant, isLoading} = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => {
      console.log(result)
      return {
        ...result,
        data: result?.data?.find(({ id }) => id === restaurantId),
        
      };
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
