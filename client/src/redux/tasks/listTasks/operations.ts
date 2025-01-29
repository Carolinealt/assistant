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
      } = await axios.get("/tasks");
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

// export const addTasks = createAsyncThunk<Task[], { rejectWithValue: string }>(
//   'tasks/addTask',
//   async (_, { rejectWithValue }) => {
//       try {
//           const { data: { data: { data } } } = await axios.get('/tasks');
//           return data;
//       } catch (e: any) {
//           return rejectWithValue(e.message);
//       }
//   }
// );

export const addTasks = createAsyncThunk<Task, Task, { rejectValue: string }>(
  "tasks/addTask",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload,"payload");
      
      const { data } = await axios.post<{ data: Task }>("/tasks", payload);
      console.log('hi');
      
      return data.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e) && e.message) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue("Неизвестная ошибка");
    }
  }
);
