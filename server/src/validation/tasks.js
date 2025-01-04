import Joi from 'joi';

export const createTaskSchema = Joi.object({
  text: Joi.string().required().messages({
    'string.base': 'Text must be a string',
    'string.required ': 'Text must be to create a new task',
  }),
  completed: Joi.boolean().required().messages({
    'boolean.base': 'Completed must contains only bool type',
    'boolean.required': 'Completed must be',
  }),
});

export const updateTaskSchema = Joi.object({
  text: Joi.string().messages({
    'string.base': 'Text must be a string',
  }),
  completed: Joi.boolean().messages({
    'boolean.base': 'Completed must contains only bool type',
  }),
});
