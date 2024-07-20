import { TasksState } from "../../../types";

export const selectTaskList = (state: TasksState) => state.items;
