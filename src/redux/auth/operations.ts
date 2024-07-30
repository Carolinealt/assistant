import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserSignUpData } from "../../types";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// const setHeaderToken = (token: string) => {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

// const deleteHeaderToken = (token: string) => {
//   delete axios.defaults.headers.common["Authorization"];
// };

export const registerUser = createAsyncThunk<
  any,
  UserSignUpData,
  {
    rejectValue: string;
  }
>("auth/register", async (userData: UserSignUpData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post("users/signup", userData);
    console.log(userData);
    return data;
  } catch (error) {
    rejectWithValue(error.message);
  }
});
