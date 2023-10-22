import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaraunts } from "./thunks/get-restaraunt";
import { REQUEST_STATUS } from "../../../constants/statuses";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "restaurant",
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUS.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaraunts.pending, (state) => {
        state.status = REQUEST_STATUS.pending;
      })
      .addCase(getRestaraunts.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUS.fulfilled;
      })
      .addCase(getRestaraunts.rejected, (state) => {
        state.status = REQUEST_STATUS.rejected;
      }),
});

export default reducer;
