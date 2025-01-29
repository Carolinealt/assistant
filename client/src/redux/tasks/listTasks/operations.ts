import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Task } from '../../../types';

axios.defaults.baseURL = "https://assistant-wi0d.onrender.com";

export const fetchTasks = createAsyncThunk<Task[], { rejectWithValue: string }>(
    'tasks/fetchTasks',
    async (_, { rejectWithValue }) => {
        try {
            const { data: { data: { data } } } = await axios.get('/tasks');
            return data;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

export const addTask = createAsyncThunk<Task, Task, { rejectValue: string }>(
    "tasks/addTask",
    async (payload, { rejectWithValue }) => {
      try {
        const { data } = await axios.post<{ data: Task }>('/tasks', payload);
        return data.data;
      } catch (e: unknown) {
        if (axios.isAxiosError(e) && e.message) {
          return rejectWithValue(e.message);
        }
        return rejectWithValue('Неизвестная ошибка');
      }
    }
  );