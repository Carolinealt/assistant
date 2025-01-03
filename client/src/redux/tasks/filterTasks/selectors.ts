import { RootState } from "../../../redux/store";

export const selectStatusTasks = (state: RootState) => state.filter.status;
