const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required(), 
  password: Joi.string().required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const categorySchema = Joi.object({
  name: Joi.string().required().empty(''),
});

module.exports = { loginSchema, userSchema, categorySchema };