export interface Task {
  id: number;
  content: string;
}

export interface TasksState {
  items: Task[];
  isLoading: boolean;
  isError: true | null;
}

export type StatusTasks = "all" | "done" | "inProgress";

export interface FilterTasksState {
  status: StatusTasks;
}

export interface User {
  email: string;
  name: string;
}

export interface authState {
  user: User;
  token: null | string;
  isLoggedin: boolean;
  isRefreshing: boolean;
}
