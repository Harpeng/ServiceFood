import styles from "./styles.module.css";
import { DishContainer } from "../dish/container";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu?.length > 0 && (
        <>
          {menu?.map((dish) => (
            <DishContainer
              className={styles.dish}
              key={dish.id}
              dishId={dish.id}
              nameDish={dish.name}
            />
          ))}
        </>
      )}
    </ul>
  );
};
