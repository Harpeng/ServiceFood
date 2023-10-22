import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesId } from "../selectors";
import { baseUrl } from "../../../../constants/api";
import { selectRestarauntMenuById } from "../../restaraunts/selectors";

export const getDishes = createAsyncThunk(
    "dishes/getDishes",
    async (restarauntId) => {
        const responce = fetch(`${baseUrl}/api/dishes?restaurantId=${restarauntId}`);
        return (await responce).json();
    },
    {
        condition: (restarauntId, {getState}) => {
            const state = getState();
            const restarauntMenu = selectRestarauntMenuById(state, restarauntId);
            const dishId = selectDishesId(state);

            return (
                restarauntMenu &&
                restarauntMenu.some((reviewId) => !dishId.includes(reviewId))
            )
        },
    }
);