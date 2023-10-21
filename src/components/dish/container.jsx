import { useSelector } from "react-redux"
import { Dish } from "./component"
import { selectDishesById } from "../../redux/entities/dishes/selectors"

export const DishContainer = ({id, ...props}) => {
    const dish = useSelector((state) => selectDishesById(state,id));

    if(!dish) {
        return null;
    }
    
    return (
        <Dish {...props} dish={dish}/>
    )
}