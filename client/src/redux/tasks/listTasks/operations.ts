import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Task } from "../../../types";

axios.defaults.baseURL = "https://assistant-wi0d.onrender.com";

export const fetchTasks = createAsyncThunk<Task[], { rejectWithValue: string }>(
  "tasks/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: {
          data: { data },
        },
      } = await axios.get("/tasks", { params: { perPage: 100 } });
      console.log(data);

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const addTasks = createAsyncThunk<Task, Task, { rejectValue: string }>(
  "tasks/addTask",
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await axios.post<{ data: Task }>("/tasks", payload);
      return data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e) && e.message) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue("Неизвестная ошибка");
    }
  }
);

export const deleteTask = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("tasks/deleteTask", async (payload, { rejectWithValue }) => {
  try {
    await axios.delete(`/tasks/${payload}`);
    return payload;
  } catch (e: unknown) {
    if (axios.isAxiosError(e) && e.message) {
      return rejectWithValue(e.message);
    }

    return rejectWithValue("Unknow error");
  }
});

export const toggleTask = createAsyncThunk<
  string,
  {
    _id: string;
    completed: boolean;
  },
  { rejectWithValue: string }
>("tasks/toggleTask", async ({ _id, completed }, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`tasks/:${_id}`, { completed });
    console.log(response);

    return response;
  } catch (e: unknown) {
    console.log(e);

    if (axios.isAxiosError(e) && e.message) {
      return rejectWithValue(e.message);
    }

    return rejectWithValue("Unknow error");
  }
});
