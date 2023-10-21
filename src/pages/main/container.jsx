import { Main } from "./component";
import { useSelector  } from "react-redux/es/hooks/useSelector";
import { selectRestarauntsId } from "../../redux/entities/restaraunts/selectors";

export const MainContainer = () => {
    const restaurantIds = useSelector((state) => selectRestarauntsId(state));
    return (
        <Main restaurantIds={restaurantIds} />
    )
}