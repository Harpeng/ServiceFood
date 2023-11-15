import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../../constants/api";
import { selectRestaurantsId } from "../selectors";

export const getRestaurants = createAsyncThunk(
    "restaraunts/getRestaraunts",
    async () => {
        const responce = fetch(`${baseUrl}/api/restaurants/`);
        return (await responce).json();
    },
    {
        condition: (_, {getState}) => !selectRestaurantsId(getState())?.length,
    }
);