import { TasksCollection } from '../db/models/task.js';

export const getAllTasks = async () => {
  const tasks = await TasksCollection.find();
  return tasks;
};

export const getTaskById = async (taskId) => {
  const task = await TasksCollection.findById(taskId);
  return task;
};

export const createTask = async (payload) => {
  const task = await TasksCollection.create(payload);

  return task;
};

export const deleteTask = async (taskId) => {
  const task = await TasksCollection.findOneAndDelete({ _id: taskId });

  return task;
};

export const updateTask = async (taskId, payload, options = {}) => {
  const rawResult = await TasksCollection.findOneAndUpdate(
    { _id: taskId },
    payload,
    { new: true, includeResultMetadata: true, ...options },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    task: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
