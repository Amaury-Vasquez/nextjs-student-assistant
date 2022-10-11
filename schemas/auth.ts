import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(4).required(),
  remember: Joi.boolean(),
});

export const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(4).alphanum().required(),
});
