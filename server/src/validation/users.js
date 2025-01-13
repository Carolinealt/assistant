import Joi from 'joi';

export const registerUserShema = Joi.object({
  name: Joi.string().min(1).max(45).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
