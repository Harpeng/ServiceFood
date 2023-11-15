import { BtnNewReview } from "../btnNewReview/component";
import classNames from "classnames";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import { ReviewContainer } from "../review/container";

export const Reviews = ({restaurantId, reviewId, className }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ul className={classNames(className, styles.reviews)}>
      {reviewId.map((id) => (
        <li key={id}
          className={classNames(className, styles.review, {
            [styles.reviewDarkTheme]: theme === "dark",
          })}
        >
          <ReviewContainer className={styles.review} reviewId={id} key={id}></ReviewContainer>
        </li>
      ))}
      <BtnNewReview restaurantId={restaurantId} className={styles.btn} />
    </ul>
  );
};
