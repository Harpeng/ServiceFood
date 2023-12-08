import { BtnNewReview } from "../btnNewReview/component";
import classNames from "classnames";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import { Review } from "../review/component";

export const Reviews = ({reviews, className, restaurantId }) => {

  console.log(restaurantId)
  const { theme } = useContext(ThemeContext);
  return (
    <ul className={classNames(className, styles.reviews)}>
      {reviews?.map((review) => (
        <li key={review.id}
          className={classNames(className, styles.review, {
            [styles.reviewDarkTheme]: theme === "dark",
          })}
        >
          <Review className={styles.review} review={review} />
        </li>
      ))}
      <BtnNewReview restaurantId={restaurantId} className={styles.btn} />
    </ul>
  );
};
