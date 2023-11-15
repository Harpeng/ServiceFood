import { useSelector } from "react-redux";
import { Tab } from "./component";
import { selectRestaurantsById } from "../../redux/entities/restaurants/selectors";


export const TabContainer = ({id, ...props}) => {
    const restaurant = useSelector((state) => selectRestaurantsById(state, id));
    if(!restaurant) {
        return null;
    }
    
    return (
        <Tab {...props} id={id} restaurant={restaurant} ></Tab>
    )
}