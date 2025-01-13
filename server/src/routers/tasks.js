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

router.get('/', ctrlWrapper(getAllTasksController));

router.get('/:taskId', isValidId, ctrlWrapper(getTaskByIdController));

router.post(
  '/',
  validateBody(createTaskSchema),
  ctrlWrapper(createTaskController),
);

router.delete('/:taskId', isValidId, ctrlWrapper(deleteTaskController));

router.put(
  '/:taskId',
  isValidId,
  validateBody(createTaskSchema),
  ctrlWrapper(upsertTaskController),
);

router.patch(
  '/:taskId',
  isValidId,
  validateBody(updateTaskSchema),
  ctrlWrapper(patchTaskController),
);

export default router;
