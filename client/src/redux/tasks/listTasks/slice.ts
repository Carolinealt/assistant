import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TasksState } from "../../../types";
import { addTasks, deleteTask, fetchTasks } from "./operations";

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

      .addCase(addTasks.pending, handlePending)
      .addCase(addTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addTasks.rejected, handleRejected)

      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((el) => el._id !== payload);
      })
      .addCase(deleteTask.rejected, handleRejected);
  },
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

export const tasksReducer = tasksSlice.reducer;
