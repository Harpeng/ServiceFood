import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishesById } from "../../redux/entities/dishes/selectors";
import { selectDishAmountId } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";

export const DishContainer = ({ id, ...props }) => {
  const dish = useSelector((state) => selectDishesById(state, id));

  const amount = useSelector((state) => selectDishAmountId(state, id));

  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  return (
    <Dish
      {...props}
      dish={dish}
      amount={amount}
      increment={() => {
        dispatch(cartActions.increment(id));
      }}
      decrement={() => {
        dispatch(cartActions.decrement(id));
      }}
    />
  );
};
