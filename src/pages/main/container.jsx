import { Main } from "./component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectRestarauntsId,
  selectRestarauntsLoadingStatus,
} from "../../redux/entities/restaraunts/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRestaraunts } from "../../redux/entities/restaraunts/thunks/get-restaraunt";

export const MainContainer = () => {
  const restaurantIds = useSelector((state) => selectRestarauntsId(state));
  const loadingStatus = useSelector(selectRestarauntsLoadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaraunts());
  }, []);

  return (
        <Main restaurantIds={restaurantIds} loading={loadingStatus} />
  );
};
