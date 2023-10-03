import React from "react";
import { Review } from "../review/component";
import styles from "./styles.module.css"

export const Reviews = ({reviews}) => {
  return (
    <ul className={styles.reviewsList}>
        {
            reviews.map((review, id) => (
                <Review review={review} key={id}></Review>
            ))
        }
    </ul>
  );
};