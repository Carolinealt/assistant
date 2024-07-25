import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authState } from "../../types";
import { registerUser } from "./operations";

const initialState: authState = {
  user: { email: "", name: "" },
  token: null,
  isLoggedin: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{}
  // extraReducers: (builder) => {
  //   builder.addCase(
  //     registerUser.fulfilled,
  //     (state, { payload }: PayloadAction) => {}
  //   );
  // },
});

export const {} = authSlice;
export const authReducer = authSlice.reducer;
