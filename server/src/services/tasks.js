import { TasksCollection } from '../db/models/task.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllTasks = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const tasksQuery = TasksCollection.find();
  const tasksCount = await TasksCollection.find()
    .merge(tasksQuery)
    .countDocuments();

  const tasks = await tasksQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(tasksCount, perPage, page);

  return { data: tasks, ...paginationData };
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
