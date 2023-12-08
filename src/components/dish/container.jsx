import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishAmountId } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";

export const DishContainer = ({ dishId, ...props }) => {

  const amount = useSelector((state) => selectDishAmountId(state, dishId));

  const dispatch = useDispatch();

  if (!dishId) {
    return null;
  }

  return (
    <Dish
      {...props}
      dishId={dishId}
      amount={amount}
      increment={() => {
        dispatch(cartActions.increment(dishId));
      }}
      decrement={() => {
        dispatch(cartActions.decrement(dishId));
      }}
    />
  );
};
