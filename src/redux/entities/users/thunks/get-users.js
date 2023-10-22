import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../../constants/api";
import { selectUsersId } from "../selectors";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async () => {
    const responce = fetch(`${baseUrl}/api/users/`);
    return (await responce).json();
  },
  {
    condition: (_, { getState }) => !selectUsersId(getState())?.length,
  }
);
