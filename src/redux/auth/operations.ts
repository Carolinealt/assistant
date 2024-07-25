import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setHeaderToken = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const deleteHeaderToken = (token: string) => {
  delete axios.defaults.headers.common["Authorization"];
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("user/signup", userData);
      console.log(data);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
