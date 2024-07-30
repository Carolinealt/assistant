import { createSelector } from "@reduxjs/toolkit";
import { Task, TasksState } from "../../../types";
import { selectStatusTasks } from "../filterTasks/selectors";

// Селекторы
export const selectTasksState = (state: { tasks: TasksState }) => state.tasks;

export const selectTaskList = createSelector(
  selectTasksState,
  (tasksState) => tasksState.items
);

export const selectVisibleList = createSelector(
  [selectTaskList, selectStatusTasks],
  (tasks, status) => {
    switch (status) {
      case "active":
        return tasks.filter((task: Task) => !task.completed);
      case "completed":
        return tasks.filter((task: Task) => task.completed);
      default:
        return tasks;
    }
  }
);
