import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/listTasks/slice";
import { filterTaskReducer } from "./tasks/filterTasks/slice";

export const store = configureStore({
  reducer: { tasks: tasksReducer, filter: filterTaskReducer },
});

// Тип для корневого состояния
export type RootState = ReturnType<typeof store.getState>;
// Тип для диспетчера
export type AppDispatch = typeof store.dispatch;
