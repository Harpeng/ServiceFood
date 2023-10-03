import React from "react";
import styles from "./style.module.css";

export const Review = ({ review }) => {
  return (
        <li className={styles.review}>
          <span>{review.user}:</span>{review.text}
        </li>
  );
};
