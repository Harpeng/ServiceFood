import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "user",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
    }),
});

export default reducer;
