import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../../constants/api";
import { selectRestaurantReviewsById } from "../../restaraunts/selectors";
import { selectReviewsId } from "../selectors";

export const getReviews = createAsyncThunk(
    "reviews/getReviews",
    async(restarauntId) => {
        const responce = fetch(`${baseUrl}/api/reviews?restaurantId=${restarauntId}`);
        return (await responce).json();
    },
    {
        condition: (restarauntId, {getState}) => {
            const state = getState();
            const restarauntReviews = selectRestaurantReviewsById(state, restarauntId);
            const reviewsId = selectReviewsId(state);

            return (
                restarauntReviews &&
                restarauntReviews.some((reviewId) => !reviewsId.includes(reviewId))
            )
        },
    }
);