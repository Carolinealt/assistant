import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/listTasks/slice";

export const store = configureStore({
  reducer: { tasks: tasksReducer },
});

export type RootState = ReturnType<typeof store.getState>;
