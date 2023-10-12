import React from "react";
import { Review } from "../review/component";
import { BtnNewReview } from "../btnNewReview/component";
import classNames from "classnames";
import styles from "./styles.module.css"

export const Reviews = ({ reviews, className }) => {
  return (
    <ul className={classNames(className, styles.reviews)}>
      {reviews.map((review, id) => (
        <Review  className={styles.review} review={review} key={id}></Review>
      ))}
      <BtnNewReview className={styles.btn} />
    </ul>
  );
};
