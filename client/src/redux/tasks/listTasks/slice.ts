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
    toggleTask: (state, { payload }: PayloadAction<number>) => {
      for (const task of state.items) {
        if (task.id === payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
