const Joi = require('joi');

const requireMessage = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().required(), 
  password: Joi.string().required(),
}).messages({
  'any.required': requireMessage,
  'string.empty': requireMessage,
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

const blogPostSchema = Joi.object({
  title: Joi.string().required(), 
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
}).messages({
  'any.required': requireMessage,
  'string.empty': requireMessage,
  'array.base': requireMessage,
});

module.exports = { loginSchema, userSchema, categorySchema, blogPostSchema };