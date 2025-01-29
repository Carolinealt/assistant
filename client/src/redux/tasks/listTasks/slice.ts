import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TasksState } from "../../../types";
import { fetchTasks } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState: TasksState = {
  items: [],
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // state.items = payload;
      })
      .addCase(addTask.rejected, handleRejected)
  }
  // {
  //   addTask: (state, { payload }: PayloadAction<Task>) => {
  //     state.items = [...state.items, payload];
  //   },
  //   deleteTask: (state, { payload }: PayloadAction<number>) => {
  //     state.items = state.items.filter((task) => task.id !== payload);
  //   },
  //   toggleTask: (state, { payload }: PayloadAction<number>) => {
  //     for (const task of state.items) {
  //       if (task.id === payload) {
  //         task.completed = !task.completed;
  //         break;
  //       }
  //     }
  //   },
  // },

});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
