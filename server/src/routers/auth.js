import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserShema } from '../validation/users.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserController } from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserShema),
  ctrlWrapper(registerUserController),
);

export default router;
