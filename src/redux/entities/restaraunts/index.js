import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaraunts } from "./thunks/get-restaraunt";

const restarauntEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "restaurant",
  initialState: restarauntEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaraunts.fulfilled, (state, { payload } = {}) => {
        restarauntEntityAdapter.setAll(state, payload);
      })
});

export default reducer;
