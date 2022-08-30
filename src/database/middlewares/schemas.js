const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required(), 
  password: Joi.string().required(),
}).messages({
  'any.required': '400|Some required fields are missing',
  'string.empty': '400|Some required fields are missing',
});

module.exports = { loginSchema };
