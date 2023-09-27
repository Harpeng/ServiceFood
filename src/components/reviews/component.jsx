import React from "react";

export const Reviews = ({ reviews }) => {
  return (
      <ul style={{'listStyleType': 'none'}}>
        {reviews.map((review) => (
          <li key={review.id}>
            <span>{review.user}</span>: {review.text}
          </li>
        ))}
      </ul>
  );
};
