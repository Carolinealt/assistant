import { SORT_ORDER } from '../constants/index.js';
import { TasksCollection } from '../db/models/task.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllTasks = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const tasksQuery = TasksCollection.find();
  if (filter.completed) {
    tasksQuery.where('completed').equals(filter.completed);
  }

  if (filter.text) {
    const textRegex = new RegExp(filter.text, 'i');
    tasksQuery.or([
      { text: textRegex },
      { title: textRegex },
    ]);
  }

  if (filter.title) {
    const textRegex = new RegExp(filter.text, 'i');
    tasksQuery.where('title').regex(textRegex);
  }

  const [tasksCount, tasks] = await Promise.all([
    TasksCollection.find().merge(tasksQuery).countDocuments(),
    tasksQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

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
