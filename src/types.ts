export interface Task {
  id: number;
  content: string;
}

export interface TasksState {
  items: Task[];
  isLoading: boolean;
  isError: true | null;
}
