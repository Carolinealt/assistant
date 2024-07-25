import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TasksState } from "../../../types";

const initialState: TasksState = {
  items: [],
  isLoading: false,
  isError: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Task>) => {
      state.items = [...state.items, payload];
    },
    deleteTask: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
