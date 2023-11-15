import React from "react";
import styles from "./styles.module.css";
import { Star } from "../star/component";
import classNames from "classnames";

export const StarRating = ({onChange, value}) => {
  const [hover, setHover] = React.useState(null);
  return (
    <div className={classNames(styles.rating)}>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <Star
            className={styles.star}
            key={index}
            value={value}
            onClick={() => onChange(currentRating)}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
            color={currentRating <= (hover || value) ? "#ffc107" : "e4e5e9"}
          />
        );
      })}
    </div>
  );
};
