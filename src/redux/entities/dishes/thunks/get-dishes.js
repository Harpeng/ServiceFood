import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesId } from "../selectors";
import { baseUrl } from "../../../../constants/api";
import { selectRestaurantMenuById } from "../../restaurants/selectors";

export const getDishes = createAsyncThunk(
    "dishes/getDishes",
    async (restaurantId) => {
        const responce = fetch(`${baseUrl}/api/dishes?restaurantId=${restaurantId}`);
        return (await responce).json();
    },
    {
        condition: (restaurantId, {getState}) => {
            const state = getState();
            const restaurantMenu = selectRestaurantMenuById(state, restaurantId);
            const dishId = selectDishesId(state);

            return (
                restaurantMenu &&
                restaurantMenu.some((reviewId) => !dishId.includes(reviewId))
            )
        },
    }
);