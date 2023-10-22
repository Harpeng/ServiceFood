import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../../constants/api";

export const getReviews = createAsyncThunk(
    "reviews/getReviews",
    async(restarauntId) => {
        const responce = fetch(`${baseUrl}/api/reviews?restaurantId=${restarauntId}`);
        return (await responce).json();
    }
);