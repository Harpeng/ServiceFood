import React from "react";
import { Review } from "../review/review";

export const Reviews = ({reviews}) => {

  return (
    <ul>
        {
            reviews.map((review, id) => (
                <Review review={review} key={id}></Review>
            ))
        }
    </ul>
  );
};