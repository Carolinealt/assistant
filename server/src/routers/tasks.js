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

const router = Router();

router.get('/tasks', ctrlWrapper(getAllTasksController));

router.get('/tasks/:taskId', ctrlWrapper(getTaskByIdController));

router.post('/tasks', ctrlWrapper(createTaskController));

router.delete('/tasks/:taskId', ctrlWrapper(deleteTaskController));

router.put('/tasks/:taskId', ctrlWrapper(upsertTaskController));

router.patch('/tasks/:taskId', ctrlWrapper(patchTaskController));

export default router;
