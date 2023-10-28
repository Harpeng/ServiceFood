import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";

const entityAdapter = createEntityAdapter();

const {reducer} = createSlice(
    {
        name: "dish",
        initialState: entityAdapter.getInitialState(),
        extraReducers: (builder) =>
        builder.addCase(getDishes.fulfilled, (state, {payload} = {payload}) => {
            entityAdapter.setMany(state, payload);
        })
    }
)

export default reducer;