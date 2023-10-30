import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../../constants/api";
import { selectRestaurantReviewsById } from "../../restaurants/selectors";
import { selectReviewsId } from "../selectors";

export const getReviews = createAsyncThunk(
    "reviews/getReviews",
    async(restaurantId) => {
        const responce = fetch(`${baseUrl}/api/reviews?restaurantId=${restaurantId}`);
        return (await responce).json();
    },
    {
        condition: (restaurantId, {getState}) => {
            const state = getState();
            const restaurantReviews = selectRestaurantReviewsById(state, restaurantId);
            const reviewsId = selectReviewsId(state);

            return (
                restaurantReviews &&
                restaurantReviews.some((reviewId) => !reviewsId.includes(reviewId))
            )
        },
    }
);