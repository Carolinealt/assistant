import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TasksState } from "../../../types";

const initialState: TasksState = { items: [], isLoading: false, isError: null };

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, { payload }: PayloadAction<Task>) => {
      state.items.push(payload);
    },
    deleteTasks: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== payload);
    },
  },
});

export const { addTasks, deleteTasks } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
