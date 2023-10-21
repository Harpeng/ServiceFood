import { useSelector } from "react-redux";
import { Tab } from "./component";
import { selectRestarauntsById } from "../../redux/entities/restaraunts/selectors";

export const TabContainer = ({id, ...props}) => {
    const restaurant = useSelector((state) => selectRestarauntsById(state, id));
    if(!restaurant) {
        return null;
    }
    return (
        <Tab {...props} id={id} restaurant={restaurant} ></Tab>
    )
}