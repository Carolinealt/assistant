import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req, res, next) => {
  const { taskId } = req.params;

  if (!isValidObjectId(taskId)) {
    throw createHttpError(400, 'Bad Request');
  }

  next();
};
