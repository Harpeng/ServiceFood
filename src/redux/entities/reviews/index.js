import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
    }),
});

export default reducer;
