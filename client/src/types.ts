export interface Task {
  title: string;
  text: string;
  completed: boolean;
  _id: string;
}

export interface TasksList {
  tasks: Task[];
}

export interface TasksState {
  items: Task[];
  isLoading: boolean;
  error: string | null;
}

export const StatusFilter = {
  all: "all",
  active: "active",
  completed: "completed",
} as const;

export type StatusFilterType = (typeof StatusFilter)[keyof typeof StatusFilter];

export interface FilterTasksState {
  status: StatusFilterType;
}

export interface UserSignUpData {
  email: string;
  name: string;
  password: string;
}

export interface authState {
  user: UserSignUpData;
  token: null | string;
  isLoggedin: boolean;
  isRefreshing: boolean;
  isOpenModal: boolean;
}
