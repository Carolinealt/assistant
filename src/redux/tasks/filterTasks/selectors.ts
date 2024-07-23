import { FilterTasksState } from "../../../types";

export const selectStatusTasks = (state: FilterTasksState) => state.status;
