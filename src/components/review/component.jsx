import React from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const Review = ({ review, className}) => {
    const {theme} = useContext(ThemeContext);

  return (
        <li className={classNames(className, styles.review, {[styles.reviewDarkTheme] : theme === "dark"})}>
          <span>{review.user}:</span>
          <p>{review.text}</p>
          <p>rating: {review.rating}</p>
        </li>
  );
};
