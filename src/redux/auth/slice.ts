import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authState } from "../../types";
import { registerUser } from "./operations";

const initialState: authState = {
  user: { email: "", name: "", password: "" },
  token: null,
  isLoggedin: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      registerUser.fulfilled,
      (state: authState, { payload }: PayloadAction<any>) => {
        console.log("payload - ", payload);

        state.token = payload;
      }
    );
  },
});

export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = (state: authState) => state.isLoggedin;
