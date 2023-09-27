import React from "react";

export const Review = ({review}) => {

    return (
        <li style={{display: 'flex'}}>
            <span>{review.user}</span>
            :{review.text}
        </li>
    );
  };