import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FilterTasksState,
  StatusFilter,
  StatusFilterType,
} from "../../../types";

const initialState: FilterTasksState = { status: StatusFilter.all };

export const filterTasks = createSlice({
  name: "filterTasks",
  initialState,
  reducers: {
    changeFilter: (state, { payload }: PayloadAction<StatusFilterType>) => {
      state.status = payload;
    },
  },
});

export const { changeFilter } = filterTasks.actions;
export const filterTaskReducer = filterTasks.reducer;
