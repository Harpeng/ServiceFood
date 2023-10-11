import React from "react";
import styles from "./styles.module.css";
import { Star } from "../star/component";
import classNames from "classnames";

export const StarRating = () => {
  const [rating, setRating] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  return (
    <div className={classNames(styles.rating)}>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <Star
            className={styles.star}
            key={index}
            value={currentRating}
            onClick={() => setRating(currentRating)}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
            color={currentRating <= (hover || rating) ? "#ffc107" : "e4e5e9"}
          />
        );
      })}
    </div>
  );
};
