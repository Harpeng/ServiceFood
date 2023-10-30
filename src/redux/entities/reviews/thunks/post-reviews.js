import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../../constants/api";
import { restaurantActions } from "../../restaurants";

export const createReview = createAsyncThunk(
    "review/createReview",
    async({restaurantId, newReview}, {dispatch}) => {
        const response = await fetch(`${baseUrl}/api/review/${restaurantId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(newReview),
        })

        console.log(restaurantId)

        const review = await response.json();

        dispatch(
            restaurantActions.addReview({restaurantId, reviewId: review.id})
        );

        return review;

    }
);