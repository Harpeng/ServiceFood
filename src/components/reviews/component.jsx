import React from "react";
import { Review } from "../review/component";
import { BtnNewReview } from "../btnNewReview/component";
import classNames from "classnames";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";

export const Reviews = ({ reviews, className }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ul className={classNames(className, styles.reviews)}>
      {reviews.map((id) => (
        <li key={id}
          className={classNames(className, styles.review, {
            [styles.reviewDarkTheme]: theme === "dark",
          })}
        >
          <Review className={styles.review} reviewId={id} key={id}></Review>
        </li>
      ))}
      <BtnNewReview className={styles.btn} />
    </ul>
  );
};
