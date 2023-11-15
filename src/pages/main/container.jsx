import { Main } from "./component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectRestaurantsId, selectRestaurantsLoadingStatus } from "../../redux/entities/restaurants/selectors";
import { getRestaurants } from "../../redux/entities/restaurants/thunks/get-restaraunt";

export const MainContainer = () => {
  const restaurantIds = useSelector((state) => selectRestaurantsId(state));
  const loadingStatus = useSelector(selectRestaurantsLoadingStatus);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
        <Main restaurantIds={restaurantIds} loading={loadingStatus} />
  );
};
