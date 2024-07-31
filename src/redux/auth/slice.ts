import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authState } from "../../types";
import { registerUser } from "./operations";
import { RootState } from "../store";

const initialState: authState = {
  user: { email: "", name: "", password: "" },
  token: null,
  isLoggedin: false,
  isRefreshing: false,
  isOpenModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleMenu: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenModal = payload;
    },
  },
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
export const { toggleMenu } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = (state: authState) => state.isLoggedin;
export const selectIsModal = (state: RootState) => state.auth.isOpenModal;
