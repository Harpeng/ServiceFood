import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesId } from "../selectors";
import { baseUrl } from "../../../../constants/api";

export const getDishes = createAsyncThunk(
    "dishes/getDishes",
    async (restarauntId) => {
        const responce = fetch(`${baseUrl}/api/dishes?restaurantId=${restarauntId}`);
        return (await responce).json();
    },
    {
        condition: (restarauntId, {getState}) => selectDishesId(getState()).includes(restarauntId) === false,
    }
);