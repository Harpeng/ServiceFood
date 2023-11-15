import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";
import { createReview } from "./thunks/post-reviews";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
    })
    .addCase(createReview.fulfilled, (state, {payload}) => {
        entityAdapter.addOne(state, payload);
    })
});

export default reducer;
