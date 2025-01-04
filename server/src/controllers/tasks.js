import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from '../services/tasks.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getAllTasksController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const tasks = await getAllTasks({ page, perPage });

  res.status(200).json({
    status: 200,
    data: tasks,
    message: 'Successfully got tasks!',
  });
};

export const getTaskByIdController = async (req, res, next) => {
  const { taskId } = req.params;

  const task = await getTaskById(taskId);

  if (!task) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json({
    status: 200,
    data: task,
    message: 'Successfully got task by ID!',
  });
};

export const createTaskController = async (req, res, next) => {
  const task = await createTask(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a student!`,
    data: task,
  });
};

export const deleteTaskController = async (req, res, next) => {
  const { taskId } = req.params;

  const task = await deleteTask(taskId);

  if (!task) {
    next(createHttpError(404, 'Task not found'));

    return;
  }

  res.status(204).send();
};

export const upsertTaskController = async (req, res, next) => {
  const { taskId } = req.params;

  const result = await updateTask(taskId, req.body, { upsert: true });

  if (!result) {
    next(createHttpError(404, 'Task not found'));
    return;
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: 'Successfully upserted a task',
    data: result.task,
  });
};

export const patchTaskController = async (req, res, next) => {
  const { taskId } = req.params;

  const result = await updateTask(taskId, req.body);

  if (!result) {
    next(createHttpError(404, 'Task not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully patched a task!`,
    data: result.task,
  });
};
