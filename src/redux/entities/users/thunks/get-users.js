import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../../constants/api";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async () => {
    const responce = fetch(`${baseUrl}/api/users/`);
    return (await responce).json();
  }
);
