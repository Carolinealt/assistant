import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusTasks } from "../../../types";

interface InitialState {
  status: StatusTasks;
}

const initialState: InitialState = { status: "all" };

export const filterTasks = createSlice({
  name: "filterTasks",
  initialState,
  reducers: {
    changeFilter: (state, { payload }: PayloadAction<StatusTasks>) => {
      state.status = payload;
    },
  },
});

export const { changeFilter } = filterTasks.actions;
export const filterTaskReducer = filterTasks.reducer;
