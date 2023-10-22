import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestarauntsId } from "../selectors";
import { baseUrl } from "../../../../constants/api";

export const getRestaraunts = createAsyncThunk(
    "restaraunts/getRestaraunts",
    async () => {
        const responce = fetch(`${baseUrl}/api/restaurants/`);
        return (await responce).json();
    },
    {
        condition: (_, {getState}) => !selectRestarauntsId(getState())?.length,
    }
);