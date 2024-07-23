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
