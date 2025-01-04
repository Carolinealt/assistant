import { Router } from 'express';
import {
  createTaskController,
  deleteTaskController,
  getAllTasksController,
  getTaskByIdController,
  patchTaskController,
  upsertTaskController,
} from '../controllers/tasks.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createTaskSchema, updateTaskSchema } from '../validation/tasks.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/tasks', ctrlWrapper(getAllTasksController));

router.get('/tasks/:taskId', isValidId, ctrlWrapper(getTaskByIdController));

router.post(
  '/tasks',
  validateBody(createTaskSchema),
  ctrlWrapper(createTaskController),
);

router.delete('/tasks/:taskId', isValidId, ctrlWrapper(deleteTaskController));

router.put(
  '/tasks/:taskId',
  isValidId,
  validateBody(createTaskSchema),
  ctrlWrapper(upsertTaskController),
);

router.patch(
  '/tasks/:taskId',
  isValidId,
  validateBody(updateTaskSchema),
  ctrlWrapper(patchTaskController),
);

export default router;
