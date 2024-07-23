import { createSelector } from "@reduxjs/toolkit";
import { TasksState } from "../../../types";

// export const selectTaskList = (state: TasksState) => state.items;

// Селекторы
export const selectTasksState = (state: { tasks: TasksState }) => state.tasks;

export const selectTaskList = createSelector(
  selectTasksState,
  (tasksState) => tasksState.items
);
